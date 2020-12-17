import React from "react";
import HeaderCompo from "../headerCompo/HeaderCompo";
import ProjectDisplay from "../projectDisplay/ProjectDisplay";
import "./Projects.css";
import amazon from "./../../images/amazon.jpg";
import tinder from "./../../images/tinder-min.jpg";
import whatsupp from "./../../images/whatsupp.jpg";
import imgstock from "./../../images/imgstock.jpg";
import birattimes from "./../../images/birattimes.jpg";
import nourishmecafe from "./../../images/nourishmecafe.jpg";
import ncpokhrel from "./../../images/ncpokhrel.jpg";
import airambulance from "./../../images/airambulance.jpg";
import webtechy from "./../../images/webtechy.jpg";
import covid from "./../../images/covid.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Zoom } from "react-awesome-reveal";

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
                  <Zoom>
                    <ProjectDisplay
                      image={amazon}
                      name="Amazon Clone"
                      link="https://amaz-fake.web.app/"
                    />
                  </Zoom>
                  <Zoom delay="20">
                    <ProjectDisplay
                      image={whatsupp}
                      name="What's Upp"
                      link="https://whatsupp-guyz.firebaseapp.com/"
                    />
                  </Zoom>
                  <Zoom delay="20">
                    <ProjectDisplay
                      image={covid}
                      name="Corona Tracker"
                      link="https://covid-dash1.web.app"
                    />
                  </Zoom>
                  <Zoom delay="40">
                    <ProjectDisplay
                      image={tinder}
                      name="Tinder Clone"
                      link="http://tinder-clone-e0b7a.web.app/"
                    />
                  </Zoom>
                  <Zoom delay="60">
                    <ProjectDisplay
                      image={imgstock}
                      name="Img Stock"
                      link="http://imgstock.net/"
                    />
                  </Zoom>
                  <Zoom delay="80">
                    <ProjectDisplay
                      image={birattimes}
                      name="Birat Times"
                      link="https://birattimes.com/"
                    />
                  </Zoom>
                  <Zoom delay="100">
                    <ProjectDisplay
                      image={nourishmecafe}
                      name="Nourish Me Cafe"
                      link="http://nourishmecafe.com.au/"
                    />
                  </Zoom>
                  <Zoom delay="120">
                    <ProjectDisplay
                      image={ncpokhrel}
                      name="NC Pokhrel"
                      link="http://ncpokhrel.com/"
                    />
                  </Zoom>
                  <Zoom delay="140">
                    <ProjectDisplay
                      image={airambulance}
                      name="Air Ambulance Nepal"
                      link="http://airambulancenepal.com/"
                    />
                  </Zoom>
                  <Zoom delay="160">
                    <ProjectDisplay
                      image={webtechy}
                      name="Web Techy"
                      link="http://webtechy.net/"
                    />
                  </Zoom>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="projects__react">
                <div className="projects_reactGrid3">
                  <Zoom>
                    <ProjectDisplay
                      image={amazon}
                      name="Amazon Clone"
                      link="https://amaz-fake.web.app/"
                    />
                  </Zoom>
                  <Zoom delay="20">
                    <ProjectDisplay
                      image={whatsupp}
                      name="What's Upp"
                      link="https://whatsupp-guyz.firebaseapp.com/"
                    />
                  </Zoom>
                  <Zoom delay="20">
                    <ProjectDisplay
                      image={covid}
                      name="Corona Tracker"
                      link="https://covid-dash1.web.app"
                    />
                  </Zoom>
                  <Zoom delay="40">
                    <ProjectDisplay
                      image={tinder}
                      name="Tinder Clone"
                      link="http://tinder-clone-e0b7a.web.app/"
                    />
                  </Zoom>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="project__wordpress">
                <div className="projects_reactGrid3">
                  <Zoom>
                    <ProjectDisplay
                      image={imgstock}
                      name="Img Stock"
                      link="http://imgstock.net/"
                    />
                  </Zoom>
                  <Zoom delay="20">
                    <ProjectDisplay
                      image={birattimes}
                      name="Birat Times"
                      link="https://birattimes.com/"
                    />
                  </Zoom>
                  <Zoom delay="40">
                    <ProjectDisplay
                      image={nourishmecafe}
                      name="Nourish Me Cafe"
                      link="http://nourishmecafe.com.au/"
                    />
                  </Zoom>
                  <Zoom delay="60">
                    <ProjectDisplay
                      image={ncpokhrel}
                      name="NC Pokhrel"
                      link="http://ncpokhrel.com/"
                    />
                  </Zoom>
                  <Zoom delay="80">
                    <ProjectDisplay
                      image={airambulance}
                      name="Air Ambulance Nepal"
                      link="http://airambulancenepal.com/"
                    />
                  </Zoom>
                  <Zoom delay="100">
                    <ProjectDisplay
                      image={webtechy}
                      name="Web Techy"
                      link="http://webtechy.net/"
                    />
                  </Zoom>
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
