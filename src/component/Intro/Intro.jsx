import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import Linkdin from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";

export default function Intro() {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>hy! I Am</span>
          <span>Jay Makwana</span>
          <span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores
            consequuntur sunt vitae. Assumenda unde, debitis in nostrum
            distinctio maiores pariatur fugit minima dicta facere error?
          </span>
        </div>
        <button className="button i-button">Hire Me</button>
        <div className="i-icons">
          <img src={Github} alt="" />
          <img src={Linkdin} alt="" />
          <img src={Instagram} alt="" />
        </div>
      </div>
      <div className="i-right">i am a right side</div>
    </div>
  );
}
