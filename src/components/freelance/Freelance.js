import React from "react";
import "./Freelance.css";
import HeaderCompo from "../headerCompo/HeaderCompo";
import Fiver from "./../../images/fiverr.jpg";
import Freelancer from "./../../images/freelancer.jpg";
import { Zoom } from "react-awesome-reveal";

const Freelance = () => {
  return (
    <div className="freelance" id="freelance">
      <div className="container__">
        <HeaderCompo name="Freelance Platforms" />
        <div className="freelance__div">
          <div>
            <Zoom>
              <a
                href="https://www.fiverr.com/abhush11"
                target="_blank"
                title="Fiverr"
              >
                <img src={Fiver} alt="fiverr" />
              </a>
            </Zoom>
          </div>
          <div>
            <Zoom>
              <a
                href="https://www.freelancer.com/u/Abhushit"
                target="_blank"
                title="Freelancer"
              >
                <img src={Freelancer} alt="freelancer" />
              </a>
            </Zoom>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Freelance;
