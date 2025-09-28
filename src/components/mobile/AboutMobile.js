import React from 'react';
import { Link } from 'react-router-dom';
import './AboutMobile.css';

const AboutMobile = () => {
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
      </div>
      <div className="about-container">
        <div className="content-section">
          <p>
            The Brothko team has extensive experience creating mobile applications. We create specialised end-to-end mobile app solutions that guarantee feature-rich & revolutionary
            mobile experiences. Our mobile technology specialists work with you to create apps for consumers, businesses, and enterprises. We aid businesses in the conception, design,
            development, and deployment of mobile application solutions to meet the business, industry, and end users' specific needs.
          </p>
          <p>
            Our company specialises in creating high-quality scalable, robust mobile applications. Using the most recent technological advancements, we assist businesses all over the
            world in creating, managing, and modernising unique apps that enable seamless user experiences across all contemporary platforms and devices.
          </p>
        </div>
        <div className="services-sections">
          <h2>Mobile Application Development Services For Various Platform</h2>
          <p>
            With the rapidly expanding mobile age, you may use our knowledge of mobile app development to make your business idea a reality.
            We capitalize on unique technological like Swift, Kotlin and Java to offer mobile app development services across iOS and Android platforms for multiple industrial domains.
          </p>
        </div>
        {/* New iOS App Development Section */}
        <div className="app-development-section">
          <h2>iOS App Development</h2>
          <p>As a development company, we believe that the latest Tech Stack plays a vital role, which include</p>
          <div className="tech-stack">
            <div className="tech-item">Xcode</div>
            <div className="tech-item">Swift</div>
            <div className="tech-item">Objective-C</div>
            <div className="tech-item">CocoaPods</div>
            <div className="tech-item">Simulator</div>
            <div className="tech-item">Firebase</div>
            <div className="tech-item">SQLite</div>
          </div>
          {/* <button className="read-more-btn">Read more →</button> */}
          <Link to="/aboutios" className="read-more-btn">Read more →</Link>
          
        </div>
        {/* New Android App Development Section */}
        <div className="app-development-section">
          <h2>Android App Development</h2>
          <p>Our Android developers are experts in web technologies such as</p>
          <div className="tech-stack">
            <div className="tech-item">Android SDK</div>
            <div className="tech-item">Android Studio</div>
            <div className="tech-item">Java</div>
            <div className="tech-item">Kotlin</div>
            <div className="tech-item">SQLite</div>
            <div className="tech-item">AVD Manager</div>
          </div>
          <Link to="/aboutandroid" className="read-more-btn">Read more →</Link>
        </div>
      </div>
    </div>
  );
};

export default AboutMobile;