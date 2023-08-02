import React, { useEffect } from "react";
import AboutIcons from "../aboutIcons/AboutIcons";
import HeaderCompo from "../headerCompo/HeaderCompo";
import "./About.css";
import SpeedIcon from "@material-ui/icons/Speed";
import MobileFriendlyIcon from "@material-ui/icons/MobileFriendly";
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import my_image from "./../../images/my_image.jpg";
import abhu from "./../../images/abhu.jpg";
import html from "./../../images/html-5.png";
import css from "./../../images/css.png";
import javascript from "./../../images/javascript.png";
import react from "./../../images/react.png";
import nextjs from "./../../images/nextjs.png";
import typescript from "./../../images/typescript.png";

import wordpress from "./../../images/wordpress.png";
import photoshop from "./../../images/photoshop.png";
import nodejs from "./../../images/nodejs.png";
import mongodb from "./../../images/mongodb-logo.png";
import php from "./../../images/php.png";
import mySql from "./../../images/mysql.png";
import { Slide } from "react-awesome-reveal";
import { Zoom } from "react-awesome-reveal";

function About() {

  useEffect(() => {
    // const bg = document.querySelector('.about__img img');
    const wholeBg = document.querySelector('.about');
    const bg1 = document.querySelector('.about__img img');
    const bg2 = document.querySelector('.about__img');

    const windowWidth = window.innerWidth / 5;
    const windowHeight = window.innerHeight / 5 ;
    const windowWidth2 = window.innerWidth / 8;
    const windowHeight2 = window.innerHeight / 8 ;

    wholeBg.addEventListener('mousemove', (e) => {
      const mouseX = e.clientX / windowWidth;
      const mouseY = e.clientY / windowHeight;
      
      // bg.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
      bg1.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
      bg2.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
    });

    // const windowWidth2 = window.innerWidth / 9;
    // const windowHeight2 = window.innerHeight / 9 ;

    // bg2.addEventListener('mousemove', (e) => {
    //   const mouseX2 = e.clientX / windowWidth2;
    //   const mouseY2 = e.clientY / windowHeight2;
      
    //   bg2.style.transform = `translate3d(-${mouseX2}%, -${mouseY2}%, 0)`;
    // });
  })

  const publicURL = process.env.PUBLIC_URL;
  // console.log("public url is>>", publicURL);
  return (
    <div className="about" id="about">
      <div className="container__">
        <HeaderCompo name="ABOUT" />

        <div className="about__details">
          <Zoom>
            <AboutIcons
              icon={<SpeedIcon />}
              name="Fast"
              desc="Fast load times and lag free interaction, my highest priority."
            />
          </Zoom>
          <Zoom delay="40">
            <AboutIcons
              icon={<MobileFriendlyIcon />}
              name="Responsive"
              desc="My layouts will work on any device, big or small."
            />
          </Zoom>
          <Zoom delay="80">
            <AboutIcons
              icon={<EmojiObjectsIcon />}
              name="Intuitive"
              desc="Strong preference for easy to use, intuitive UX/UI."
            />
          </Zoom>
          <Zoom delay="120">
            <AboutIcons
              icon={<DoneAllIcon />}
              name="Dynamic"
              desc="Websites don't have to be static, I love making pages come to life."
            />
          </Zoom>
        </div>

        <div className="about__me">
          <div className="about__meGrid2">
            <div className="about__meImage">
              <Slide direction="left">
                <div className="about__img">
                  <img src={abhu} alt="my_image.jpg" />
                </div>
              </Slide>
            </div>
            <div className="about__meSkills">
              <Slide direction="right">
                <div className="about__desc">
                  <h3>Who's this guy?</h3>
                  <p>
                    I am a web developer.{" "}
                    <br />
                    Completed Computer Science Engineering and working as a
                    developer for four years.
                    <br />{" "}
                    <span>Love to make something creative and special. </span>
                  </p>
                </div>
                <div className="about__skills">
                  <h3>Skills</h3>
                  <ul>
                    <li>
                      <img src={nextjs} alt="nextjs_logo" title="Next js" />
                    </li>
                    <li>
                      <img src={react} alt="react_logo" title="React Js" />
                    </li>
                    <li>
                      <img src={typescript} alt="typescript_logo" title="Typescript" />
                    </li>
                    <li>
                      <img src={html} alt="html_logo" title="Html" />
                    </li>
                    <li>
                      <img src={css} alt="css_logo" title="Css" />
                    </li>
                    <li>
                      <img src={javascript} alt="js_logo" title="Javascript" />
                    </li>
                    <li>
                      <img src={nodejs} alt="node_logo" title="Node Js" />
                    </li>
                    <li>
                      <img src={mongodb} alt="mongo_logo" title="Mongo DB" />
                    </li>
                    <li>
                      <img
                        src={wordpress}
                        alt="wordpress_logo"
                        title="Wordpress"
                      />
                    </li>
                    <li>
                      <img src={photoshop} alt="ps_logo" title="Photoshop" />
                    </li>

                    <li>
                      <img src={php} alt="php_logo" title="Php" />
                    </li>
                    <li>
                      <img src={mySql} alt="sql_logo" title="MySql" />
                    </li>
                  </ul>
                </div>
              </Slide>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
