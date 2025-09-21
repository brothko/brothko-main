import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <section className="hero" style={{ padding: '12rem 0 6rem' }}>
        <div className="container">
          <div className="hero-content">
            <h1>About Brothko</h1>
            <p>Leading the way in software innovation and professional development.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg mb-6">
                At Brothko, we are dedicated to bridging the gap between education and industry by providing comprehensive training programs and cutting-edge software solutions. Our mission is to empower individuals and businesses with the skills and tools they need to succeed in the digital age.
              </p>
              <p className="text-lg">
                With years of experience and a team of industry experts, we deliver exceptional results that drive growth and innovation.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-50 rounded-lg p-8">
                <div className="text-6xl mb-4">🎯</div>
                <h3 className="text-2xl font-semibold mb-2">100+</h3>
                <p className="text-gray-600">Successful Projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title text-center">Our Values</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p>We embrace cutting-edge technologies and creative solutions to stay ahead of the curve.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤝</div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p>We strive for perfection in every project, delivering results that exceed expectations.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💡</div>
              <h3 className="text-xl font-semibold mb-3">Empowerment</h3>
              <p>We believe in empowering our clients and students to achieve their full potential.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">Why Choose Brothko?</h2>
            <p className="section-subtitle">
              We're not just another tech company. We're your partner in digital transformation, 
              committed to delivering exceptional value and measurable results.
            </p>
            <div className="hero-buttons mt-8">
              <Link to="/services" className="primary-btn">
                Our Services
              </Link>
              <Link to="/programs" className="secondary-btn">
                Training Programs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;