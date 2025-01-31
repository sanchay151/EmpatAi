import React, { useEffect, useState } from "react";
import styles from "./ChatBox.module.css";
import Title from "../../components/Title/Title";
import InputBar from "../../components/InputBar/InputBar";
import Body from "../../components/Body/Body";
import { ThreeCircles } from "react-loader-spinner";
import { auth } from "../../firebase";
import {  NavLink } from "react-router-dom";
import useIsMobile from "../../components/IsMobile";
import { FaArrowLeft } from "react-icons/fa";
const ChatBox = (props) => {
  const isMobile=useIsMobile();
  const [userName, setUserName] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    auth.onAuthStateChanged((user) => {
      // console.log(user);
      if (user) {
        setUserName(user.displayName);
      } else {
        setUserName("");
      }
    });
  }, []);

  

  return (
    <>
      {loading ? (
        <div className={styles.loadcontainer}>
          <ThreeCircles
            height="50"
            width="50"
            color="#046cf1"
            visible={true}
            ariaLabel="three-circles-rotating"
          />
        </div>
      ) : (
        <div className={styles.main}>
          <div className={styles.container}>
            <div className={`${styles.header} ${styles.item}`}>
              {isMobile?(
                <NavLink to="/">
                    <button className={styles.arrow}> <FaArrowLeft /> </button>
                </NavLink>
                
              ):(
                <div> </div>
              )}
              <h2>Hey, {userName === "" ? "User" : `${props.name}`} </h2>
             
            </div>
            <Title />
            <Body />
            <InputBar />
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBox;
