import React, { useRef } from "react";
import styles from "./Header.module.css";
import chatbotBanner from "../../assets/chatbotbanner.png";
import Main from '../../components/Main/Main.jsx';

const Header = () => {
  const mainRef = useRef(null);

  const handleClick = () => {
    mainRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.left}>
          <p className={styles.heading}>
            Welcome to EmpatAI
          </p>
          <p className={styles.subHeading}>
            Meet Jessie. She's your personal digital counsellor
          </p>
          <button className={styles.btn} onClick={handleClick}>
            Get Started
          </button>
        </div>
        <div className={styles.right}>
          <img src={chatbotBanner} alt="AI" />
        </div>
      </div>

      {/* Main should only appear below */}
      <div ref={mainRef}>
        <Main />
      </div>
    </>
  );
};

export default Header;
