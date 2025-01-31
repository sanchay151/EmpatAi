import React, { createContext, useContext, useRef, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  // Random API key selection for redundancy
  const apiKeys = [
    "AIzaSyCMFFVM5YkWs17nkHnk2h9tgT0El2s2zug",
    "AIzaSyCx5FO7g2uAZMV0Sy5qzqTV2Y0jIWiOiI4",
  ];
  const apiKey = apiKeys[Math.floor(Math.random() * apiKeys.length)];

  // Gemini AI Setup
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  // React States
  const lastMsg = useRef();
  const [messageText, setMessageText] = useState("");
  const [messages, setMessages] = useState([
    {
      from: "ai",
      text: "Hi there! I'm your AI assistant. I'm here to help you out with your questions. Ask me anything you want.",
    },
  ]);
  const [processing, setProcessing] = useState(false);

  // Handle User Message Submission
  const handleSubmission = async () => {
    if (!messageText.trim() || processing) return;

    // Add User Message
    const tempMessages = [
      ...messages,
      { from: "human", text: messageText },
    ];
    setMessages(tempMessages);
    setMessageText("");

    // Scroll to latest message
    setTimeout(() =>
      lastMsg.current?.scrollIntoView({ behavior: "smooth" })
    );

    try {
      setProcessing(true);

      // Constructing the prompt
      const initialPrompt = "You are a social agent jessie made for mental health talks with the user. jessie is a female ai assistant. below are some last messages of conversation for you to understand context and respond accordingly. response should strictly have only response as jessie nothing else. only include message, nothing like jessie: type follow format strictly.\n\n";
      const chatHistory = tempMessages
        .slice(-8)
        .map(msg => `${msg.from}: ${msg.text}`)
        .join("\n");
      const prompt = initialPrompt + chatHistory + "\nai:";

      // Gemini API Call
      const result = await model.generateContent({ contents: [{ role: "user", parts: [{ text: prompt }] }] });
      const responseText = result.response?.candidates?.[0]?.content?.parts?.[0]?.text || "I'm sorry, I couldn't process that.";

      setProcessing(false);

      // Add AI Response to Messages
      setMessages(prev => [...prev, { from: "ai", text: responseText.trim() }]);
    } catch (error) {
      setProcessing(false);
      setMessages(prev => [
        ...prev,
        { from: "ai", text: "Error processing this message. Please try again later." },
      ]);
    }

    // Scroll to latest message
    setTimeout(() =>
      lastMsg.current?.scrollIntoView({ behavior: "smooth" })
    );
  };

  return (
    <AppContext.Provider
      value={{
        lastMsg,
        messageText,
        setMessageText,
        processing,
        setProcessing,
        messages,
        setMessages,
        handleSubmission,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

export const useGlobalContext = () => {
  return useContext(AppContext);
};
