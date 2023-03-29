import React from "react"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Footer.css"
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.linkedin.com/in/bryan-mora-a5bb1323a/" target="_blank">
            <LinkedInIcon/>
          </a>
          <a href = "mailto:smithmora.bryan@gmail.com?Subject=">
            <EmailIcon />
          </a>
          <a href="https://github.com/morab19" target="_blank">
            <GithubIcon />
          </a>
      </div>
      <p> &copy; 2023 bryanmora.net</p>
    </div>
  );
}

export default Footer;