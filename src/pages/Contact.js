import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhr3OxtO9Pxp6b2d6L7k8urm5b-mZ6pIE",
  authDomain: "brothkoweb.firebaseapp.com",
  projectId: "brothkoweb",
  storageBucket: "brothkoweb.firebasestorage.app",
  messagingSenderId: "979709019661",
  appId: "1:979709019661:web:0846020587fe5c48a03744"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Save form data to Firestore
      await addDoc(collection(db, "contacts"), {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
        timestamp: new Date()
      });

      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    } catch (error) {
      console.error("Error submitting form: ", error);
      setIsSubmitting(false);
      setSubmitStatus('error');
    }
  };

  const services = [
    { value: '', label: 'Select a service' },
    { value: 'web-development', label: 'Web Development' },
    { value: 'mobile-development', label: 'Mobile Development' },
    { value: 'cloud-solutions', label: 'Cloud Solutions' },
    { value: 'ui-ux-design', label: 'UI/UX Design' },
    { value: 'consultation', label: 'Consultation' },
    { value: 'other', label: 'Other' }
  ];

  return (
    <>
      <section className="hero" style={{ padding: '12rem 0 6rem' }}>
        <div className="container">
          <div className="hero-content">
            <h1>Get In Touch</h1>
            <p>
              Ready to start your new journey with Brothko or have questions about our
              services? We'd love to hear from you. Let's discuss how we can help
              you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="contact-container">
            {/* Contact Information */}
            <div className="contact-info">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Contact Information</h2>

              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div className="contact-details">
                  <h4>Email Us</h4>
                  <p>brothkoins@gmail.com</p>
                  <p className="text-sm text-gray-500">Response within 24 hours</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div className="contact-details">
                  <h4>Call Us</h4>
                  <p>+91 8319428709,<br />
                    +91 8418018966,<br />
                    +91 9696345338</p>
                  <p className="text-sm text-gray-500">Mon-Fri 9AM-6PM EST</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div className="contact-details">
                  <h4>Visit Us</h4>
                  <p>BTM Layout, Bengaluru, Karnataka<br />Dombivli East, Mumbai <br />IT Park, Hyderabad</p>
                  <p className="text-sm text-gray-500">By appointment only</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="font-semibold mb-3">Follow Us</h4>
                {/* Social Links */}
                <div className="footer-social-links">
                  <a
                    href="#"
                    className="footer-social-link"
                    aria-label="Telegram"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="telegram.png"
                      alt="Telegram"
                      className="social-logo"
                    />
                  </a>
                  <a
                    href="#"
                    className="footer-social-link"
                    aria-label="Twitter"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="twitterslogo.png"
                      alt="Twitter"
                      className="social-logo"
                    />
                  </a>
                  <a
                    href="#"
                    className="footer-social-link"
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="linkedinlogo.png"
                      alt="LinkedIn"
                      className="social-logo"
                    />
                  </a>
                  <a
                    href="#"
                    className="footer-social-link"
                    aria-label="Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="instalogo.png"
                      alt="Instagram"
                      className="social-logo"
                    />
                  </a>
                  <a
                    href="#"
                    className="footer-social-link"
                    aria-label="GitHub"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="githublogo.png"
                      alt="GitHub"
                      className="social-logo"
                    />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Send us a Message</h2>


              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 555-987-6543"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="service">Service Interested In *</label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="form-control"
                    >
                      {services.map((service) => (
                        <option key={service.value} value={service.value}>
                          {service.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your project or how we can help you..."
                  ></textarea>
                </div>
                <div>
                  {submitStatus === 'success' && (
                    <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg mb-6">
                      <p className="text-base font-bold">Thank you for your message!</p>
                      <p className="text-sm font-bold">We'll get back to you within 24 hours.</p>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg mb-6">
                      <p className="text-base font-bold">Error submitting form</p>
                      <p className="text-sm font-bold">Please try again later.</p>
                    </div>
                  )}
 
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="loading"></span>
                      Sending Message...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;