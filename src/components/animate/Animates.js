import React from "react";
import Particles from "react-particles-js";
import "./Animates.css";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { Fade } from "react-awesome-reveal";
import { PlayCircleOutline } from "@material-ui/icons";
import { useState } from "react";
import VideoDialogBox from "./VideoDialogBox";

const viewScroll = () => {
  document.getElementById("portfolio").scrollIntoView({
    behavior: "smooth",
  });
};

function Animate() {
  const [showVideo, setShowVideo] = useState(false);

  const handleWatchVideo = () => {
    setShowVideo(true);
  };

  const callBackVideo = (call) => {
    if (call === false) {
      setShowVideo(false);
    }
  };

  return (
    <div className="animate__" id="home">
      {/* <Particles
        params={{
          particles: {
            number: {
                value: 50,
                density: {
                    enable: true,
                    value_area: 500
                }
            }
            },
            interactivity: {
                events:{
                    onHover:{
                        enable: true,
                        mode:"repulse"
                    }
                }
            }
          }}
          
         style={{
          width: "100%",
          background: "#252934"
        }}
      />  */}

      <Particles
        className="animate__particles"
        params={{
          particles: {
            number: {
              value: 300,
              // density: {
              //   enable: true,
              //   value_area: 500,
              // },
            },
            line_linked: {
              enable: true,
              opacity: 0.02,
            },
            // move: {
            //   direction: "right",
            //   speed: 0.05,
            // },
            // size: {
            //   value: 1,
            // },
            opacity: {
              anim: {
                enable: true,
                speed: 5,
                opacity_min: 0.05,
              },
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
            },
            // modes: {
            //   push: {
            //     particles_nb: 1,
            //   },
            // },
          },
          // retina_detect: true,
        }}
        style={{
          width: "100%",
          background: "#252934",
        }}
      />
      <div className="animate__inside">
        <h1>
          Hello, I am{" "}
          <span className="animate_insideColorHeader">Abhushit Chaudhary</span>
        </h1>
        <br />
        <h1>I am a Software Engineer</h1>
        <div className="button__flex">
          <button className="btn__animate" onClick={viewScroll}>
            View my work <ArrowRightAltIcon />
          </button>
          <button className="btn__watch" onClick={handleWatchVideo}>
            Watch Video <PlayCircleOutline />{" "}
          </button>
        </div>
      </div>

      {showVideo && <VideoDialogBox callBackVideo={callBackVideo} />}
    </div>
  );
}

export default Animate;
