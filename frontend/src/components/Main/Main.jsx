import React, { forwardRef } from "react";
import styles from "./Main.module.css";
import ChatBotCardImg from "../../assets/Chat-bot-bro.svg";
import ResponsiveImg from "../../assets/responsive.svg";
import ConversationalImg from "../../assets/conversational.jpg";
import { Link } from "react-router-dom";

const Main = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h3>Features</h3>
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.image}>
              <img src={ConversationalImg} alt="Conversational AI" />
            </div>
            <div className={styles.text}>
              <h1 className={styles.cardTitle}>Gemini AI Powered</h1>
              <p>
              EmpatAI is an AI-powered chatbot based on Gemini's 1.5 Flash model that leverages advanced capabilities in natural language processing. With a vast knowledge base, contextual understanding, and sophisticated language generation abilities, this chatbot excels at engaging in human-like conversations. The Gemini 1.5 Flash model offers enhanced performance, enabling EmpatAI to provide more detailed, nuanced, and empathetic responses.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.image}>
              <img src={ChatBotCardImg} alt="ChatBot Illustration" />
            </div>
            <div className={styles.text}>
              <h1 className={styles.cardTitle}>Conversational ChatBot</h1>
              <p>
              EmpatAI is a conversational AI chatbot designed to engage in dynamic and interactive conversations. At its core is Jessie, an advanced AI assistant that exhibits exceptional natural language understanding and generation capabilities. Jessie can respond to user queries, hold meaningful discussions, and provide valuable information with a refined level of response consistency and reduced randomness.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.image}>
              <img src={ResponsiveImg} alt="Responsive UI" />
            </div>
            <div className={styles.text}>
              <h1 className={styles.cardTitle}>Responsive & Clean UI</h1>
              <p>
              EmpatAI is a conversational AI chatbot designed to engage in dynamic and interactive conversations. At its core is Jessie, an advanced AI assistant that exhibits exceptional natural language understanding and generation capabilities. Jessie can respond to user queries, hold meaningful discussions, and provide valuable information with a refined level of response consistency and reduced randomness.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.explore}>
          <Link to="/chatbox">
            <button className={styles.btn}>Explore Now!</button>
          </Link>
        </div>
      </div>
    </div>
  );
});

export default Main;
