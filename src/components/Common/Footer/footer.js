import React from "react";
import "./styles.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedIn from "@mui/icons-material/LinkedIn";

function Footer() {
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  return (
    <div className="footer">
      <h2 className="logo" onClick={() => topFunction()}>
        CryptoBucks<span>.</span>
      </h2>
      <div className="social-links">
        <a href="https://www.facebook.com/mukul.joshi.378199">
          <FacebookIcon className="social-link" />
        </a>
        <a href="mailto:mukuljoshi6312@gmail.com">
          <EmailIcon className="social-link" />
        </a>
        <a href="https://www.linkedin.com/in/mukul-joshi-661234193/">
          <LinkedIn className="social-link" />
        </a>
        <a href="https://www.instagram.com/mukul8466/">
          <InstagramIcon className="social-link" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
