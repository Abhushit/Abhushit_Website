import React from "react";
import FooterForm from "../footerForm/FooterForm";
import HeaderCompo from "../headerCompo/HeaderCompo";
import SocialMedia from "../socialMedia/SocialMedia";
import "./Footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from '@material-ui/icons/GitHub';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import FooterContact from "../footerContact/FooterContact";
import { Zoom } from "react-awesome-reveal";


const scrollTop = () =>{
    window.scrollTo({ top: 0, behavior: 'smooth' })
}

function Footer() {
  return (
    <>
      <div className="footer" id="contact">
        <div className="container__">
          <HeaderCompo name="CONTACT" />
          <p className="footer__questionText">
            Have a question or want to work together?
          </p>
          <div className="footer__contact">
          <FooterForm />
          <FooterContact />
          </div>
        </div>
      </div>
      <div className="footer__social">
        <div className="back_to_top" onClick={scrollTop}>
          <ExpandLessIcon />
        </div>
        <div className="footer__socialMedia">
          <Zoom>
            <SocialMedia icon={<LinkedInIcon />} iconLink="https://www.linkedin.com/in/abhushit-chaudhary-88266a167/" title="LinkedIn"/>
          </Zoom>
          <Zoom delay="20">
            <SocialMedia icon={<GitHubIcon />} iconLink="https://github.com/Abhushit" title="Github" />
          </Zoom>
          <Zoom delay="40">
            <SocialMedia icon={<FacebookIcon />} iconLink="https://www.facebook.com/abushit.chaudary" title="Facebook" />
          </Zoom>
          <Zoom delay="60">
            <SocialMedia icon={<InstagramIcon />} iconLink="https://www.instagram.com/abhushit_chaudhary/" title="Instagram" />
          </Zoom>
        </div>
        <p>
          ABHUSHIT CHAUDHARY <span>©{new Date().getFullYear()}</span>
        </p>
      </div>
    </>
  );
}

export default Footer;
