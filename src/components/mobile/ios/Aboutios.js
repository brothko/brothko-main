import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Aboutios.css';

const Aboutios = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-web-container">
      <div className="about-web-content">
        <div className="content-layout">
          <div className="text-content">
            <h1>Mobile Application Development Services</h1>
            <p>Craft easy-to-use and highly engaging native iOS apps for iPhone and iPad</p>
            <Link to="/contact" className="contact-btn">Contact us →</Link>
          </div>
          <div className="image-content">
            <div className="phone-image"></div>
          </div>
        </div>
        <div className="web-dev-info">
          <h2>iOS App Development</h2>
          <p className="info-text">
            Brothko helps you enhance iOS mobile and iPad user's experience by building secure and light mobile and iPad apps. Our unparalleled iOS expertise in iOS application development, technologies, including Xcode, Swift, sqlLite, and Objective C, ensures that you get personalized apps for all Apple devices.
          </p>
          <p className="info-text">
            Our company specialises in creating high-quality scalable, robust mobile applications. Using the most recent technological advancements, we assist businesses all over the world in creating ,managing and mordernising unique apps that enable seamless user experiences across all contemporary platforms and devices.
          </p>
          {/* <ul className="services-list">
            <li>Custom Website Design</li>
            <li>Web CMS Development</li>
            <li>Web Portal Development</li>
            <li>Enterprise Web App Development</li>
            <li>Website migration</li>
            <li>Website maintenance</li>
            <li>API Development</li>
            <li>Website testing and support</li>
            <li>Micro Services</li>
          </ul> */}
        </div>
        <div className="mobile-dev-info">
          {/* <h2>Mobile Backend & APIs Development</h2>
          <p className="info-text">
            Brothko ensures you get bespoke solutions for mobile and web with API-driven architecture from on-site app to cloud-based back-end app and anything in between. Our web development services and solutions help you scale up your app faster and work flawlessly.
          </p> */}
          <h3 className="why-choose">Why Choose Brothko For iOS App Development?</h3>
          <ul className="services-list">
            <li>10+ years of experience in mobile app development</li>
            <li>An excellent pool of professional and experienced developers</li>
            <li>Agile Practice</li>
            <li>Assured quality services</li>
            <li>Adaptable to client needs</li>
            <li>100% Transparency</li>
            <li>Low development and maintenance cost</li>
            <li>State-of-the-art technology</li>
            <li>Quality delivered in time</li>
          </ul>
          <h3 className="tech-competency">Delivering a Next-Generation iOS Application with Technical Competence</h3>
          <p className="info-text">
            Understanding the complexities of the apps ecosystem, our professional development team help build iOS solutions using.
          </p>
          {/* <div className="tech-icons">
            <span className="icon php">PHP</span>
            <span className="icon mysql">MySQL</span>
            <span className="icon nodejs">Node.js</span>
            <span className="icon angular">AngularJS</span>
            <span className="icon jquery">jQuery</span>
            <span className="icon html">HTML5</span>
            <span className="icon graphql">GraphQL</span>
            <span className="icon json">JSON</span>
            <span className="icon mongodb">MongoDB</span>
            <span className="icon javascript">JavaScript</span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Aboutios;