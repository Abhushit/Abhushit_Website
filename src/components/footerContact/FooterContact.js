import React from "react";
import "./FooterContact.css";
import { Fade } from "react-awesome-reveal";

function FooterContact() {
  return (
    <Fade direction="bottom" delay={"40"}>
      <div className="footerContact">
        <h3>Details :</h3>
        <p>Country : Nepal</p>
        <p>
          Email :{" "}
          <a href="mailto:chaudhary.abhushit@gmail.com">
            chaudhary.abhushit@gmail.com
          </a>
        </p>
        <p>
          Phone : <a href="tel:+9779823644144"> +977-982-364-4144 </a>
        </p>
      </div>
    </Fade>
  );
}

export default FooterContact;
