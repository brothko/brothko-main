import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>A Better Place To Work</h1>
          <p>
            We believe that a thriving workplace is the foundation of success.
            We are committed to creating an environment where innovation,
            collaboration, and personal growth flourish.
          </p>
          <div className="hero-buttons">
            <Link to="/programs" className="primary-btn">
              Explore Programs
            </Link>
            <Link to="/contact" className="secondary-btn">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Our Virtual Programs */}
      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title">Why Choose Our Virtual Programs?</h2>
          <p className="section-subtitle">
            Our comprehensive programs are designed to equip you with the skills,
            experience, and credentials needed to excel in the tech industry.
          </p>

          <div className="program-benefits">
            <div className="benefit-item">
              <span className="benefit-icon">⏰</span>
              <h3>Flexible Learning</h3>
              <p>Our virtual programs offer flexible schedules to fit your lifestyle and busy commitments.</p>
            </div>

            <div className="benefit-item">
              <span className="benefit-icon">👨‍🏫</span>
              <h3>Training by Industry Trainers</h3>
              <p>Benefit from high-quality training delivered by industry experts with real-world experience.</p>
            </div>

            <div className="benefit-item">
              <span className="benefit-icon">💻</span>
              <h3>Real-World Projects</h3>
              <p>Gain hands-on experience by working on real-world projects that matter.</p>
            </div>

            {/* <div className="benefit-item">
              <span className="benefit-icon">🏆</span>
              <h3>Certificate of Internship</h3>
              <p>Certificate of Internship upon completing your task and assessments.</p>
            </div> */}

            <div className="benefit-item">
              <span className="benefit-icon">📜</span>
              <h3>Certificate of Training</h3>
              <p>Certificate of Training upon completing your coursework and assessments.</p>
            </div>

            {/* <div className="benefit-item">
              <span className="benefit-icon">📊</span>
              <h3>Evaluation Report</h3>
              <p>Feedback on your performance with a detailed evaluation report.</p>
            </div> */}

            <div className="benefit-item">
              <span className="benefit-icon">🎁</span>
              <h3>Goodies for Top Candidates</h3>
              <p>Top-performing candidates will receive exciting goodies to reward excellence.</p>
            </div>

            <div className="benefit-item">
              <span className="benefit-icon">💼</span>
              <h3>Full-Time Opportunity</h3>
              <p>Exceptional interns may be offered full-time opportunities with our team.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>500+</h3>
              <p>Students Trained</p>
            </div>
            <div className="stat-item">
              <h3>95%</h3>
              <p>Placement Rate</p>
            </div>
            <div className="stat-item">
              <h3>50+</h3>
              <p>Industry Partners</p>
            </div>
            <div className="stat-item">
              <h3>100+</h3>
              <p>Projects Completed</p>
            </div>
          </div>
        </div>
      </section>
      {/* Services Section with Image-based UI */}
          <section className="services-section">
            <h4 className="section-subtitle">Services</h4>
            <h2 className="section-title" style={{ fontWeight: 'bold' }}>Place to get solution for your business needs</h2>
            <div className="services-grid">
              <div className="service-card web-dev-card">
                <div className="service-icon">📝</div>
                <h3>Website Development</h3>
                <p>High end trailer made web solution using State-of-the-art technologies</p>
                <Link to="/aboutweb" className="read-more">Read More →</Link>
              </div>
              <div className="service-card ios-dev-card">
                <div className="service-icon">🍏</div>
                <h3>IOS Development</h3>
                <p>Craft innovative, robust, scalable, intuitive, and user-friendly apps for iPhone, iPad</p>
                <Link to="/aboutios" className="read-more">Read More →</Link>
              </div>
              <div className="service-card android-dev-card">
                <div className="service-icon">🤖</div>
                <h3>Android Development</h3>
                <p>Develop feature-rich, scalable and cost-effective apps customized for your business</p>
                <Link to="/aboutandroid" className="read-more">Read More →</Link>
              </div>
            </div>
          </section>

      {/* Premier Software Services Provider */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Premier Software Services Provider</h2>
            <p className="section-subtitle">
              As a certified and recognized entity in the industry, we bring a wealth
              of expertise to every project, ensuring exceptional results tailored
              to your unique needs.
            </p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🔍</div>
              <h3>Quality Assurance</h3>
              <p>We provide comprehensive facilities and rigorous quality assurance processes to ensure your software meets the highest standards of excellence.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">🤝</div>
              <h3>Customer-Centric Approach</h3>
              <p>We work closely with you to understand your goals and deliver solutions that meet your specific requirements and exceed expectations.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">🛠️</div>
              <h3>Continuous Support & Maintenance</h3>
              <p>Our dedicated team ensures that your software solution remains optimized, secure, and up-to-date with the latest technologies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Most Affordable Pricing */}
      <section className="pricing-section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Most Affordable Budget-Friendly Pricing</h2>
            <p className="section-subtitle">
              At Brothko, we believe that cutting-edge software shouldn't come with a hefty price tag.
              That's why we're committed to providing affordable solutions that empower businesses
              of all sizes to thrive in the digital age.
            </p>
          </div>

          <div className="pricing-card">
            <div className="pricing-badge">Most Popular</div>
            <h3>Competitive Pricing</h3>
            <p className="text-xl mb-6 text-gray-600">
              With our cost-effective software offerings, you can harness the power
              of technology without breaking the bank.
            </p>

            <ul className="pricing-features">
              <li>Custom Software Development</li>
              <li>24/7 Technical Support</li>
              <li>Regular Security Updates</li>
              <li>Scalable Solutions</li>
              <li>Free Consultation</li>
            </ul>

            <div className="pricing-cta">
              <Link to="/contact" className="btn btn-primary btn-full">
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;