import React from "react";
import "./Footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from '@material-ui/icons/GitHub';

function Footer() {
  return (
    <div className="footer">
      <div className="social__media">
        <a href="https://www.facebook.com/profile.php?id=100009321916423" target="_blank" className="footer__icon">
          <FacebookIcon fontSize="large" />
        </a>
        <a href="https://twitter.com/Subhaji13837382" target="_blank" className="footer__icon">
          <TwitterIcon fontSize="large" />
        </a>
        <a href="https://www.linkedin.com/in/subhajit-das-2123a5179/" target="_blank" className="footer__icon">
          <LinkedInIcon fontSize="large" />
        </a>
        <a href="https://github.com/subhajitdas1999" target="_blank" className="footer__icon">
          <GitHubIcon fontSize="large" />
        </a>
      </div>
      <h4 className="footer_developer">
        Developed By <span className="footer__name">Subhajit Das</span>
      </h4>
    </div>
  );
}

export default Footer;
