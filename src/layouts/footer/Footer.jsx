import React from "react";
import "./Footer.css";

const Footer = () => {
  const githubHref = () => {
    window.open("https://github.com/HimanshiNayak/TechFlow", "_blank");
  };
  return (
    <div className='footer-container'>
      <p className='made-by'>By Himanshi Nayak</p>
      <i className='fab fa-github github-icon' onClick={githubHref}></i>
    </div>
  );
};

export default Footer;
