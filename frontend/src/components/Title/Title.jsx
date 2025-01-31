import React from "react";
import styles from "./Title.module.css";
import chatbotbanner1 from "../../assets/chatbotbanner1.png"
const Title = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.left}>
          <div className={styles.image}>
            <img src={chatbotbanner1} alt="AI" />
          </div>
          <p>Jessie</p>
        </div>
      </div>
    </div>
  );
};

export default Title;
