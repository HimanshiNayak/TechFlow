import React, { useEffect } from "react";
import "./about.css";
import whyReadImage from "../../assets/about.png";

const About = () => {
  useEffect(() => {
    document.title = "TechFlow | About";
  });
  return (
    <div className='h-100'>
      <div className='about-container'>
        <p className='about-para-1'>
          Learn any course from a ton of free courses
        </p>

        <div className='container'>
          <div className='row'>
            <div className='col-12 col-lg-6 d-flex flex-column align-items-center justify-content-center'>
              <img src={whyReadImage} className='why-read-image' alt='' />
            </div>
            <div className='col-12 col-lg-6 d-flex flex-column align-items-center justify-content-center'>
              <p className='about-para-2'>
           Discover a wide range of top-quality courses from the best instructors around the world, all in one place and completely free.
Each course is carefully curated to ensure you get practical, reliable, and up-to-date knowledge that helps you learn smarter and progress faster.

z
                <br />
           Explore topics that truly matter, bookmark your favorite courses for easy access, and learn at your own pace without any pressure or limitations.
Build strong skills, boost your confidence, and grow your career without spending a single penny.

              </p>
            </div>
          </div>
        </div>
        <p className='about-para-2 mt-auto'>
          Please note that the app is still in development phase and this is not
          the final product
        </p>
      </div>
    </div>
  );
};

export default About;
