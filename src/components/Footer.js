import React from "react"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import "../styles/Footer.css"
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <LinkedInIcon />
            <Link to="/https://www.linkedin.com/in/bryan-mora-a5bb1323a/"></Link>

      </div>
      <p> &copy; 2023 bryanmora.net</p>
    </div>
  );
}

export default Footer;