import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: "Custom Web Development",
      description: "We build scalable, high-performance web applications tailored to your business needs using the latest technologies.",
      icon: "💻",
      features: ["React/Vue/Angular", "Node.js/Python", "REST/GraphQL APIs", "Progressive Web Apps"]
    },
    {
      title: "Mobile App Development",
      description: "Create engaging mobile experiences with native and cross-platform solutions that work seamlessly across all devices.",
      icon: "📱",
      features: ["iOS & Android", "React Native", "Flutter", "Offline Capabilities"]
    },
    {
      title: "Cloud Solutions & DevOps",
      description: "Leverage cloud infrastructure for scalability and reliability with expert DevOps practices and continuous deployment.",
      icon: "☁️",
      features: ["AWS, Azure, GCP", "Docker & Kubernetes", "CI/CD Pipelines", "Infrastructure as Code"]
    },
    {
      title: "UI/UX Design",
      description: "Transform your ideas into intuitive, beautiful interfaces that delight users and drive business growth.",
      icon: "🎨",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
    },
    {
      title: "Quality Assurance",
      description: "Ensure your software meets the highest standards with comprehensive testing and quality assurance processes.",
      icon: "🔍",
      features: ["Automated Testing", "Performance Testing", "Security Audits", "Cross-browser Testing"]
    },
    {
      title: "Digital Transformation",
      description: "Modernize your business with comprehensive digital solutions that integrate seamlessly with your existing systems.",
      icon: "🚀",
      features: ["Legacy System Migration", "Microservices", "API Integration", "Data Analytics"]
    }
  ];

  return (
    <>
      <section className="hero" style={{ padding: '12rem 0 6rem' }}>
        <div className="container">
          <div className="hero-content">
            <h1>Comprehensive Software Solutions</h1>
            <p>
              We deliver end-to-end software solutions that empower businesses to 
              innovate, scale, and succeed in the digital age. From concept to deployment, 
              we're with you every step of the way.
            </p>
            <div className="hero-buttons">
              <Link to="/contact" className="primary-btn">
                Start Project
              </Link>
              <Link to="/about" className="secondary-btn">
                Our Expertise
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title">Our Core Services</h2>
          <p className="section-subtitle">
            We offer a complete suite of software services designed to meet your 
            unique business challenges and help you achieve your digital goals.
          </p>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="mt-4 text-left text-sm text-gray-600 space-y-1">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 py-1">
                      <span className="text-blue-500">→</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Our Development Process</h2>
            <p className="section-subtitle">
              We follow a proven, collaborative process that ensures quality results 
              and keeps you informed every step of the way.
            </p>
          </div>
          
          <div className="program-benefits">
            <div className="benefit-item">
              <span className="benefit-icon">📋</span>
              <h3>Discovery & Planning</h3>
              <p>Deep understanding of your goals, requirements, and technical needs</p>
            </div>
            
            <div className="benefit-item">
              <span className="benefit-icon">🎨</span>
              <h3>Design & Prototyping</h3>
              <p>Creating beautiful, functional designs with user feedback loops</p>
            </div>
            
            <div className="benefit-item">
              <span className="benefit-icon">💻</span>
              <h3>Development & Testing</h3>
              <p>Building robust solutions with comprehensive quality assurance</p>
            </div>
            
            <div className="benefit-item">
              <span className="benefit-icon">🚀</span>
              <h3>Deployment & Support</h3>
              <p>Seamless launch with ongoing maintenance and optimization</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;