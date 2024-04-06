import React, { useState } from "react";
import { Input, Button } from "antd";
import axios from "axios";

const { TextArea } = Input;

const CompanyPanel = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    if (input.trim() === "") return;

    // Make a request to the ChatGPT API
    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          messages: [{ role: "user", content: input }],
          model: "gpt-4",
          max_tokens: 50,
          temperature: 0.7,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
          },
        }
      );

      setMessages([...messages, { text: input, type: "user" }]);
      setMessages([
        ...messages,
        { text: response.data.choices[0].message.content, type: "ai" },
      ]);
      setInput("");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "20px",
        }}
      >
        <div
          style={{
            fontSize: "18px",
            fontWeight: "500",
            fontFamily: "Raleway",
            marginBottom: "10px",
          }}
        >
          Have a question?
        </div>
        <div
          style={{ fontSize: "12px", fontWeight: "400", fontFamily: "Raleway" }}
        >
          Feel free to ask our AI anything about carbon emissions
        </div>
      </div>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div>
          {messages.map((message, index) => (
            <div key={index} className={message.type}>
              {message.text}
            </div>
          ))}
        </div>
        <TextArea
          rows={4}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <Button onClick={sendMessage} primary>
          Submit
        </Button>
      </div>
    </>
  );
};

export default CompanyPanel;
