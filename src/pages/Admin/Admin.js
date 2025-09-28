import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import './Admin.css';

// Firebase configuration (same as Contact.js)
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

const Admin = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showData, setShowData] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [loginError, setLoginError] = useState('');

  // Default user credentials
  const defaultUser = { username: 'brothkotech', password: 'Brothko@ogi' };

  const handleLoginChange = (e) => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value
    });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (
      loginForm.username === defaultUser.username &&
      loginForm.password === defaultUser.password
    ) {
      setIsLoggedIn(true);
      setLoginError('');
      setLoginForm({ username: '', password: '' });
    } else {
      setLoginError('Invalid username or password');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowData(false);
    setContacts([]);
  };

  const fetchContacts = async () => {
    setLoading(true);
    setError('');
    setShowData(true);

    try {
      const querySnapshot = await getDocs(collection(db, "contacts"));
      const contactsData = [];
      
      querySnapshot.forEach((doc) => {
        contactsData.push({
          id: doc.id,
          ...doc.data()
        });
      });

      // Sort by timestamp (newest first)
      contactsData.sort((a, b) => 
        new Date(b.timestamp?.toDate()) - new Date(a.timestamp?.toDate())
      );

      setContacts(contactsData);
    } catch (err) {
      console.error("Error fetching contacts: ", err);
      setError("Failed to fetch data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return 'N/A';
    try {
      const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
      return date.toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch (err) {
      return 'Invalid date';
    }
  };

  const getServiceLabel = (serviceValue) => {
    const services = {
      'web-development': 'Web Development',
      'mobile-development': 'Mobile Development',
      'cloud-solutions': 'Cloud Solutions',
      'ui-ux-design': 'UI/UX Design',
      'consultation': 'Consultation',
      'other': 'Other'
    };
    return services[serviceValue] || serviceValue || 'N/A';
  };

  if (!isLoggedIn) {
    return (
      <div className="login-container">
        <section className="login-section">
          <div className="container">
            <div className="login-form">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Admin Login</h2>
              {loginError && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg mb-6">
                  <p className="font-medium">{loginError}</p>
                </div>
              )}
              <form onSubmit={handleLoginSubmit}>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={loginForm.username}
                    onChange={handleLoginChange}
                    required
                    placeholder="Enter username"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={loginForm.password}
                    onChange={handleLoginChange}
                    required
                    placeholder="Enter password"
                    className="form-control"
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-full"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="admin-container">
      <section className="admin-hero">
        <div className="container">
          <div className="admin-header">
            <div className="header-content">
              <div>
                <h1 className="text-4xl font-bold text-gray-800 mb-4">Admin Dashboard</h1>
                <p className="text-xl text-gray-600">
                  View all contact form submissions from your website.
                </p>
              </div>
              <button
                onClick={handleLogout}
                className="btn btn-secondary"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="admin-content">
        <div className="container">
          <div className="admin-actions">
            <button
              onClick={fetchContacts}
              disabled={loading}
              className="btn btn-primary btn-lg"
            >
              {loading ? (
                <>
                  <span className="loading"></span>
                  Loading Data...
                </>
              ) : (
                'View Data'
              )}
            </button>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg mb-6">
              <p className="font-medium">{error}</p>
            </div>
          )}

          {showData && contacts.length === 0 && !loading && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No contact submissions found.</p>
              <p className="text-gray-400 text-sm mt-2">
                Contact form submissions will appear here when users submit the form.
              </p>
            </div>
          )}

          {showData && contacts.length > 0 && (
            <div className="contacts-table-container">
              <div className="table-header">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Contact Submissions ({contacts.length})
                </h2>
                <button
                  onClick={() => setShowData(false)}
                  className="btn btn-secondary"
                >
                  Hide Data
                </button>
              </div>

              <div className="table-responsive">
                <table className="contacts-table">
                  <thead>
                    <tr>
                      <th>Date & Time</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Service</th>
                      <th>Message</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {contacts.map((contact) => (
                      <tr key={contact.id}>
                        <td className="date-cell">
                          <div className="date-text">{formatDate(contact.timestamp)}</div>
                        </td>
                        <td className="name-cell">
                          <div className="name-text">{contact.name || 'N/A'}</div>
                        </td>
                        <td className="email-cell">
                          <div className="email-text">
                            <a 
                              href={`mailto:${contact.email}`} 
                              className="email-link"
                            >
                              {contact.email || 'N/A'}
                            </a>
                          </div>
                        </td>
                        <td className="phone-cell">
                          <div className="phone-text">
                            <a 
                              href={`tel:${contact.phone}`} 
                              className="phone-link"
                            >
                              {contact.phone || 'N/A'}
                            </a>
                          </div>
                        </td>
                        <td className="service-cell">
                          <span className="service-badge">
                            {getServiceLabel(contact.service)}
                          </span>
                        </td>
                        <td className="message-cell">
                          <div className="message-preview">
                            {contact.message && contact.message.length > 50 
                              ? `${contact.message.substring(0, 50)}...` 
                              : contact.message || 'N/A'
                            }
                          </div>
                        </td>
                        <td className="actions-cell">
                          <div className="action-buttons">
                            <button
                              onClick={() => {
                                if (window.confirm(`Copy email for ${contact.name || 'this contact'}?`)) {
                                  navigator.clipboard.writeText(contact.email);
                                  alert('Email copied to clipboard!');
                                }
                              }}
                              className="copy-btn"
                              title="Copy Email"
                            >
                              📋
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Admin;