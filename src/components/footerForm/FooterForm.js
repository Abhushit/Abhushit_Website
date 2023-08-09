import React from "react";
import "./FooterForm.css";
import  {Fade} from "react-awesome-reveal";
import { useState } from "react";
import { Cancel, Clear, Close } from "@material-ui/icons";

function FooterForm() {
  const [submitText, setSubmitText] = useState(false)

  const submitForm = (e) => {
    e.preventDefault()
    setSubmitText(true);
    setTimeout(() => {
      setSubmitText(false);
    },5000)
  }

  const handleCloseSubmit = () => {
    setSubmitText(false);
  }

  return (
    
      <div className="footerForm">
          <Fade direction="bottom" delay="40">
        <form className="form_grouped">
          <input type="text" className="form_foot" placeholder="Full Name" />
          <input type="text" className="form_foot" placeholder="Enter Email" />
          <textarea
            className="form_foot"
            placeholder="Your Message"
            style={{ height: 120 + "px" }}
          />
          <button className="btn-submit" onClick={e => submitForm(e)}>Submit</button>
          {submitText ?
        <div className="submit__text">
            Sorry, Can not send the mail at the moment.
            <Clear fontSize="small" onClick={handleCloseSubmit} />
        </div> : ""
        }
        </form>
        
        </Fade>
      </div>
  );
}

export default FooterForm;
