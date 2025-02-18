import React, { useEffect, useState } from "react";
import styles from "./App.module.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChatBox from "./pages/ChatBox/ChatBox";
import { auth } from "./firebase";
import Home from "./pages/Home/Home";
import { ThreeCircles } from "react-loader-spinner";

function App() {
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
  useEffect(() => {
    document.title = "EmpatAI";
  }, []);

  return (
    <div className={styles.App}>
      {loading ? (
        <div className={styles.loadcontainer}>
          <ThreeCircles
            height="50"
            width="50"
            color="#046cf1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="three-circles-rotating"
            outerCircleColor=""
            innerCircleColor=""
            middleCircleColor=""
          />
        </div>
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chatbox" element={<ChatBox name={userName} />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
