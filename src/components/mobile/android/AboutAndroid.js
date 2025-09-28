import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AboutAndroid.css';

const AboutAndroid = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-web-container">
      <div className="about-web-content">
        <div className="content-layout">
          <div className="text-content">
            <h1>Mobile Application Development Services</h1>
            <p>Create your websites to expand your presence in global market using latest technologies with us</p>
            <Link to="/contact" className="contact-btn">Contact us →</Link>
          </div>
          <div className="image-content">
            <div className="phone-image"></div>
          </div>
        </div>
        <div className="web-dev-info">
          <h2>Android App Development</h2>
          <p className="info-text">
            The fastest and best cost effective approach to keep expanding your company is to turn your existing website/old hybrid app into a native Android mobile app. To create native Android apps, we have highly skilled mobile app development team with extensive development experience that creates stunning, engaging mobile apps based on your business need and offers continuing support and maintenance services.
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
          <h3 className="why-choose">Why Choose Brothko For Android App Development?</h3>
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
          <h3 className="tech-competency">Tech Competency in Delivering Next Generation Android Application</h3>
          <p className="info-text">
            Provide engaging consumer experiences by using our tech expertise working with next-gen technologies and feature rich Android applications.
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

export default AboutAndroid;