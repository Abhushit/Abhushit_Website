import React from "react";
import "./FooterForm.css";
import  {Slide} from "react-awesome-reveal";

function FooterForm() {
  return (
    
      <div className="footerForm">
          <Slide direction="left">
        <form className="form_grouped">
          <input type="text" className="form_foot" placeholder="Full Name" />
          <input type="text" className="form_foot" placeholder="Enter Email" />
          <textarea
            className="form_foot"
            placeholder="Your Message"
            style={{ height: 120 + "px" }}
          />
          <button className="btn-submit">Submit</button>
        </form>
        </Slide>
      </div>
  );
}

export default FooterForm;
