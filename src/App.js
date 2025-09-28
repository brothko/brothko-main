import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './pages/Header';
import Home from './pages/Home';
import Programs from './pages/Programs';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import './App.css';
import AboutWeb from './components/Website/Aboutweb';
import AboutMobile from './components/mobile/AboutMobile';
import AboutAndroid from './components/mobile/android/AboutAndroid';
import Aboutios from './components/mobile/ios/Aboutios';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/aboutweb" element={<AboutWeb />} />
            <Route path="/aboutmobile" element={<AboutMobile />} />
            <Route path="/aboutandroid" element={<AboutAndroid />} />
            <Route path="/aboutios" element={<Aboutios />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;