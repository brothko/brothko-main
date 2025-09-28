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
        {/* Our Skills Section */}
          <div className="skills-section">
            <div className="skills-header">
              <h2 className="section-title">Our Skills</h2>
              <p className="section-subtitle">
                We believe as development company that latest tech stack always plays a vital role. 
                Our USP lies in applying our near-expert knowledge to various verticals, and creating use
              </p>
              <p className="section-subtitle">
                cases that set the standard for the entire industry.
              </p>
            </div>

            <div className="skills-grid">
              {/* iOS Development */}
              {/* <div className="skill-group">
                <img src="https://img.icons8.com/color/48/000000/xcode.png" alt="XCode" className="skill-icon" />
                <span className="skill-label">X-Code</span>
              </div> */}

              {/* <div className="skill-group">
                <img src="https://img.icons8.com/color/48/000000/swift.png" alt="Swift" className="skill-icon" />
                <span className="skill-label">Swift</span>
              </div> */}

              {/* <div className="skill-group">
                <img src="https://img.icons8.com/color/48/000000/objective-c.png" alt="Objective-C" className="skill-icon" />
                <span className="skill-label">Objective-C</span>
              </div> */}

              {/* <div className="skill-group">
                <img src="https://img.icons8.com/color/48/000000/cocoapods.png" alt="CocoaPods" className="skill-icon" />
                <span className="skill-label">CocoaPods</span>
              </div> */}

              {/* <div className="skill-group">
                <img src="https://img.icons8.com/color/48/000000/ios-simulator.png" alt="Simulator" className="skill-icon" />
                <span className="skill-label">Simulator</span>
              </div> */}

              <div className="skill-group">
                <img src="https://img.icons8.com/color/48/000000/firebase.png" alt="Firebase" className="skill-icon" />
                <span className="skill-label">Firebase</span>
              </div>

              {/* Android Development */}
              {/* <div className="skill-group">
                <img src="https://img.icons8.com/color/48/000000/android.png" alt="Android SDK" className="skill-icon" />
                <span className="skill-label">Android SDK</span>
              </div> */}

              <div className="skill-group">
                <img src="https://img.icons8.com/color/48/000000/android-studio.png" alt="Android Studio" className="skill-icon" />
                <span className="skill-label">Android Studio</span>
              </div>

              <div className="skill-group">
                <img src="https://img.icons8.com/color/48/000000/kotlin.png" alt="Kotlin" className="skill-icon" />
                <span className="skill-label">Kotlin</span>
              </div>

              <div className="skill-group">
                <img src="https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png" alt="Java" className="skill-icon" />
                <span className="skill-label">Java</span>
              </div>

              {/* <div className="skill-group">
                <img src="https://img.icons8.com/color/48/000000/android-studio-avd-manager.png" alt="AVD Manager" className="skill-icon" />
                <span className="skill-label">AVD Manager</span>
              </div> */}

              {/* Web Development */}
              {/* <div className="skill-group">
                <img src="https://img.icons8.com/color/48/000000/php.png" alt="PHP" className="skill-icon" />
                <span className="skill-label">PHP</span>
              </div> */}

              <div className="skill-group">
                <img src="https://img.icons8.com/color/48/000000/mysql.png" alt="MySQL" className="skill-icon" />
                <span className="skill-label">MySQL</span>
              </div>

              <div className="skill-group">
                <img src="https://img.icons8.com/color/48/000000/nodejs.png" alt="Node.js" className="skill-icon" />
                <span className="skill-label">Node.js</span>
              </div>

              <div className="skill-group">
                <img src="https://img.icons8.com/color/48/000000/angularjs.png" alt="AngularJS" className="skill-icon" />
                <span className="skill-label">AngularJS</span>
              </div>

              <div className="skill-group">
                <img src="https://img.icons8.com/color/48/000000/react-native.png" alt="ReactJS" className="skill-icon" />
                <span className="skill-label">React JS</span>
              </div>

              <div className="skill-group">
                <img src="https://img.icons8.com/color/48/000000/html-5.png" alt="HTML" className="skill-icon" />
                <span className="skill-label">HTML5</span>
              </div>

              {/* <div className="skill-group">
                <img src="https://img.icons8.com/color/48/000000/sqlite.png" alt="SQLite" className="skill-icon" />
                <span className="skill-label">SQLite</span>
              </div> */}

              {/* <div className="skill-group">
                <img src="https://img.icons8.com/color/48/000000/graphql.png" alt="GraphQL" className="skill-icon" />
                <span className="skill-label">GraphQL</span>
              </div> */}

              {/* <div className="skill-group">
                <img src="https://img.icons8.com/color/48/000000/json.png" alt="JSON" className="skill-icon" />
                <span className="skill-label">JSON</span>
              </div> */}

              <div className="skill-group">
                <img src="https://img.icons8.com/color/48/000000/mongodb.png" alt="MongoDB" className="skill-icon" />
                <span className="skill-label">MongoDB</span>
              </div>

              <div className="skill-group">
                <img src="https://img.icons8.com/color/48/000000/javascript.png" alt="JavaScript" className="skill-icon" />
                <span className="skill-label">JavaScript</span>
              </div>

              <div className="skill-group">
                <img src="https://img.icons8.com/color/48/000000/css3.png" alt="CSS" className="skill-icon" />
                <span className="skill-label">CSS</span>
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