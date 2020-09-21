import React from "react";
import "./FooterContact.css";
import { Slide } from "react-awesome-reveal";

function FooterContact() {
  return (
    <Slide direction="right">
      <div className="footerContact">
        <h3>Details :</h3>
        <p>Address : Biratnagar, Nepal</p>
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
    </Slide>
  );
}

export default FooterContact;
