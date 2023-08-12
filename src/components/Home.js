import React from "react";
import myImage2 from "./InShot4.png";
import myImage3 from "./InShot3.png";
import "./Home.css";
import LazyImage from "./LazyImage";
export default function Home() {
  return (
    <div className="container1">
      <div className="d2">
      {/* progressive image Loading */}
      <LazyImage 
        src={myImage2}
        alt="Lazy Loaded Image"
        dataSrc={myImage3}
      />
        <div className="typewriter">
          <h3>Hemchand Chandravanshi</h3>
        </div>
        <div className="typewriter2">
          <p>software Developer</p>
        </div>
      </div>
      <div className="bio">
        <p>
          I'm a software engineer focused on building web applications and
          websites utilizing JavaScript, Reactjs, Nodejs and Machine Learning.
        </p>
      </div>
    </div>
  );
}
