import React from "react";
import HeaderCompo from "../headerCompo/HeaderCompo";
import ProjectDisplay from "../projectDisplay/ProjectDisplay";
import "./Projects.css";
import amazon from "./../../images/amazon.jpg";
import whatsupp from "./../../images/whatsupp.jpg";
import imgstock from "./../../images/imgstock.jpg";
import birattimes from "./../../images/birattimes.jpg";
import nourishmecafe from "./../../images/nourishmecafe.jpg";
import ncpokhrel from "./../../images/ncpokhrel.jpg";
import airambulance from "./../../images/airambulance.jpg";
import webtechy from "./../../images/webtechy.jpg";
import buenos from "./../../images/buenos.jpg";
import just from "./../../images/just.jpg";
import skinvoyance from "./../../images/skinvoyance.jpg";
import exchange_dark from "./../../images/exchange_dark.jpg";
import final_hour from "./../../images/final_hour.jpg";
import change_dashboard from "./../../images/change_dashboard.jpg";


import tiktaktoe from "./../../images/tik-tak-toe.jpg";
import covid from "./../../images/covid.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Fade } from "react-awesome-reveal";

function Projects({}) {
  return (
    <div className="projects" id="portfolio">
      <div className="container__">
        <HeaderCompo name="PROJECTS" />
        <div className="projects__buttons">
          <Tabs>
            <TabList>
              <Tab className="btn-projects">All</Tab>
              <Tab className="btn-projects">React Js</Tab>
              <Tab className="btn-projects">Wordpress</Tab>
            </TabList>
            <TabPanel>
              <div className="projects__react">
                <div className="projects_reactGrid3">
                  <Fade>
                    <ProjectDisplay
                      image={final_hour}
                      name="Final Hour"
                      link="https://finalhour.retailcare.com.au/"
                    />
                  </Fade>
                  <Fade>
                    <ProjectDisplay
                      image={change_dashboard}
                      name="Change Dashboard"
                      link="https://change-dashboard.vercel.app/"
                    />
                  </Fade>
                  
                  <Fade>
                    <ProjectDisplay
                      image={skinvoyance}
                      name="Skinvoyance"
                      link="https://skinvoyance.vercel.app/"
                    />
                  </Fade>
                 
                  <Fade>
                    <ProjectDisplay
                      image={exchange_dark}
                      name="Exchange Dashboard"
                      link="https://exchange-dashboard-nine.vercel.app/"
                    />
                  </Fade>
                  
                  <Fade>
                    <ProjectDisplay
                      image={just}
                      name="JUST"
                      link="https://just-latam.com/"
                    />
                  </Fade>
                  
                  
                  <Fade>
                    <ProjectDisplay
                      image={buenos}
                      name="BAMD"
                      link="https://buenosaires.vercel.app/"
                    />
                  </Fade>

                  <Fade delay="20">
                    <ProjectDisplay
                      image={whatsupp}
                      name="What's Upp"
                      link="https://whatsupp-guyz.firebaseapp.com/"
                    />
                  </Fade>

                  <Fade delay="20">
                    <ProjectDisplay
                      image={amazon}
                      name="Amazon Clone"
                      link="https://amaz-fake.web.app"
                    />
                  </Fade>

                  <Fade delay="20">
                    <ProjectDisplay
                      image={tiktaktoe}
                      name="MERN Tik-Tak-Toe Challenge"
                      link="https://mern-tik-tak-toe.vercel.app"
                    />
                  </Fade>
                  
                  <Fade delay="20">
                    <ProjectDisplay
                      image={covid}
                      name="Corona Tracker"
                      link="https://covid-dash1.web.app"
                    />
                  </Fade>
                 
                  <Fade delay="20">
                    <ProjectDisplay
                      image={imgstock}
                      name="Img Stock"
                      link="http://imgstock.net/"
                    />
                  </Fade>
                  <Fade delay="20">
                    <ProjectDisplay
                      image={birattimes}
                      name="Birat Times"
                      link="https://birattimes.com/"
                    />
                  </Fade>
                  <Fade delay="20">
                    <ProjectDisplay
                      image={nourishmecafe}
                      name="Nourish Me Cafe"
                      link="http://nourishmecafe.com.au/"
                    />
                  </Fade>
                  <Fade delay="20">
                    <ProjectDisplay
                      image={ncpokhrel}
                      name="NC Pokhrel"
                      link="http://ncpokhrel.com/"
                    />
                  </Fade>
                  <Fade delay="20">
                    <ProjectDisplay
                      image={airambulance}
                      name="Air Ambulance Nepal"
                      link="http://airambulancenepal.com/"
                    />
                  </Fade>
                  <Fade delay="20">
                    <ProjectDisplay
                      image={webtechy}
                      name="Web Techy"
                      link="http://webtechy.net/"
                    />
                  </Fade>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="projects__react">
                <div className="projects_reactGrid3">
                  <Fade>
                    <ProjectDisplay
                      image={final_hour}
                      name="Final Hour"
                      link="https://finalhour.retailcare.com.au/"
                    />
                  </Fade>

                  <Fade>
                    <ProjectDisplay
                      image={change_dashboard}
                      name="Change Dashboard"
                      link="https://change-dashboard.vercel.app/"
                    />
                  </Fade>

                  <Fade>
                    <ProjectDisplay
                      image={skinvoyance}
                      name="Skinvoyance"
                      link="https://skinvoyance.vercel.app/"
                    />
                  </Fade>
                  
                  <Fade>
                    <ProjectDisplay
                      image={exchange_dark}
                      name="Exchange Dashboard"
                      link="https://exchange-dashboard-nine.vercel.app/"
                    />
                  </Fade>
                  
                  <Fade>
                    <ProjectDisplay
                      image={amazon}
                      name="Amazon Clone"
                      link="https://amaz-fake.web.app/"
                    />
                  </Fade>

                  <Fade>
                    <ProjectDisplay
                      image={buenos}
                      name="BAMD"
                      link="https://buenosaires.vercel.app/"
                    />
                  </Fade>
                 
                  
                  <Fade delay="20">
                    <ProjectDisplay
                      image={whatsupp}
                      name="What's Upp"
                      link="https://whatsupp-guyz.firebaseapp.com/"
                    />
                  </Fade>

                  <Fade delay="20">
                    <ProjectDisplay
                      image={tiktaktoe}
                      name="MERN Tik-Tak-Toe Challenge"
                      link="https://mern-tik-tak-toe.vercel.app"
                    />
                  </Fade>
                  
                  <Fade delay="20">
                    <ProjectDisplay
                      image={covid}
                      name="Corona Tracker"
                      link="https://covid-dash1.web.app"
                    />
                  </Fade>
         
                </div>
              </div>
            </TabPanel>
            <TabPanel> 
              <div className="project__wordpress">
                <div className="projects_reactGrid3">
                  <Fade>
                    <ProjectDisplay
                      image={imgstock}
                      name="Img Stock"
                      link="http://imgstock.net/"
                    />
                  </Fade>
                  <Fade>
                    <ProjectDisplay
                      image={just}
                      name="JUST"
                      link="https://just-latam.com/"
                    />
                  </Fade>
                  <Fade delay="20">
                    <ProjectDisplay
                      image={birattimes}
                      name="Birat Times"
                      link="https://birattimes.com/"
                    />
                  </Fade>
                  <Fade delay="20">
                    <ProjectDisplay
                      image={nourishmecafe}
                      name="Nourish Me Cafe"
                      link="http://nourishmecafe.com.au/"
                    />
                  </Fade>
                  <Fade delay="20">
                    <ProjectDisplay
                      image={ncpokhrel}
                      name="NC Pokhrel"
                      link="http://ncpokhrel.com/"
                    />
                  </Fade>
                  <Fade delay="20">
                    <ProjectDisplay
                      image={airambulance}
                      name="Air Ambulance Nepal"
                      link="http://airambulancenepal.com/"
                    />
                  </Fade>
                  <Fade delay="20">
                    <ProjectDisplay
                      image={webtechy}
                      name="Web Techy"
                      link="http://webtechy.net/"
                    />
                  </Fade>
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default Projects;
