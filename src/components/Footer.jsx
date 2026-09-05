import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';
import FluxLogo from '../assets/IMP/FLUX_LOGO_upscaled.png';
import BottomPattern from '../assets/bottom_pattern.png';
import { Mail, Phone, MapPin, ArrowUp, Sparkles, ShieldCheck, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-modern">
      <div className="footer-container">
        {/* Top Status & Direct Action Strip */}
        <div className="footer-top-strip">
          <div className="footer-status-badge">
            <span className="status-dot-pulse"></span>
            <span className="status-text">Accepting Q2/Q3 Projects • Rapid 4-Week Sprints</span>
          </div>

          <div className="footer-quick-actions">
            <a 
              href="https://wa.me/918591903004?text=Hi%20Fluxurious%20Tech%2C%20I%27d%20like%20to%20discuss%20a%20new%20project." 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-action-chip"
            >
              <span>WhatsApp Direct</span>
              <ArrowUpRight size={14} />
            </a>
            <a 
              href="mailto:fluxurioustech@gmail.com" 
              className="footer-action-chip"
            >
              <Mail size={14} />
              <span>fluxurioustech@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Main 4-Column Content */}
        <div className="footer-content-grid">
          {/* Col 1: Brand & Positioning */}
          <div className="footer-col brand-col">
            <Link to="/" className="footer-logo-link" onClick={scrollToTop}>
              <img src={FluxLogo} alt="FLUXURIOUS TECH" className="footer-brand-logo" />
            </Link>
            <p className="footer-brand-desc">
              Custom digital products and high-performance MVPs, designed with serious intent and delivered in structured 4-week sprints.
            </p>
            <div className="footer-badge-feature">
              <Sparkles size={14} className="feature-icon" />
              <span>Direct Founder & Senior Engineer Access</span>
            </div>
          </div>

          {/* Col 2: Solutions */}
          <div className="footer-col">
            <h4 className="footer-heading">Solutions</h4>
            <ul className="footer-nav-list">
              <li><Link to="/services">Web App Development</Link></li>
              <li><Link to="/services">UI/UX & Design Systems</Link></li>
              <li><Link to="/services">Mobile Apps (iOS & Android)</Link></li>
              <li><Link to="/services">Backend & Database Systems</Link></li>
              <li><Link to="/services">Cloud & DevOps Deployment</Link></li>
              <li><Link to="/services">AI Chatbots & Automation</Link></li>
            </ul>
          </div>

          {/* Col 3: Studio & Navigation */}
          <div className="footer-col">
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-nav-list">
              <li><Link to="/">Home Overview</Link></li>
              <li><Link to="/about">About Our Studio</Link></li>
              <li><Link to="/projects">Featured Case Studies</Link></li>
              <li><Link to="/pricing">Sprint Pricing</Link></li>
              <li><Link to="/contact">Schedule a Briefing</Link></li>
            </ul>
          </div>

          {/* Col 4: Studio Standards & Direct Contacts */}
          <div className="footer-col contact-col">
            <h4 className="footer-heading">Studio Standards</h4>
            <ul className="footer-standards-list">
              <li>
                <ShieldCheck size={16} className="standard-icon" />
                <div>
                  <strong>100% IP Ownership</strong>
                  <span>Full code repository & Figma source handover</span>
                </div>
              </li>
              <li>
                <Sparkles size={16} className="standard-icon" />
                <div>
                  <strong>4-Week Production Handover</strong>
                  <span>From kickoff to live verified deployment</span>
                </div>
              </li>
            </ul>

            <div className="footer-direct-contact">
              <div className="contact-item">
                <MapPin size={14} className="contact-icon" />
                <span>Thane, Mumbai Metro, India</span>
              </div>
              <div className="contact-item">
                <Phone size={14} className="contact-icon" />
                <a href="tel:+918591903004">+91 8591903004</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="footer-bottom-bar">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} Fluxurious Tech. All rights reserved.
          </p>

          <div className="footer-meta-pill">
            <span>Engineered in Mumbai, India</span>
            <span className="meta-sep">•</span>
            <span>IST (UTC+5:30)</span>
          </div>

          <button className="footer-back-to-top" onClick={scrollToTop} aria-label="Back to top">
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>

      {/* Subtle Bottom Ambient Pattern */}
      <div className="footer-ambient-pattern">
        <img src={BottomPattern} alt="" className="footer-pattern-img" />
      </div>
    </footer>
  );
};

export default Footer; 