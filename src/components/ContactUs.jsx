import React, { useState, useEffect, useRef } from 'react';
import '../styles/ContactUs.css';
import Button2 from './Button2';
import BottomPattern from '../assets/bottom_pattern.png';
import BlurImage from '../assets/Blur.png';
import lottie from 'lottie-web';
import contactAnimation from '../assets/lottie_animations/Contact.json';
import { motion } from 'framer-motion';

const ContactUs = () => {
  const animContainer = useRef(null);

  useEffect(() => {
    if (!animContainer.current) return;

    animContainer.current.innerHTML = '';

    const animInstance = lottie.loadAnimation({
      container: animContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: contactAnimation,
    });

    return () => {
      animInstance.destroy();
    };
  }, []);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Replace with your WhatsApp number including country code without '+' or spaces (e.g. '1234567890')
  const WHATSAPP_PHONE_NUMBER = '918591903004';

  const projectTypeLabels = {
    'web-design': 'Web Design',
    'web-development': 'Web Development',
    'mobile-app': 'Mobile App Development',
    'full-stack': 'Full Stack Development',
    'ui-ux': 'UI/UX Design',
    'consultation': 'Consultation & Strategy',
    'other': 'Other / Custom Project'
  };

  const sendToWhatsAppDirect = (data) => {
    const formattedProjectType = projectTypeLabels[data.projectType] || data.projectType || 'Not specified';
    const phoneDisplay = data.phone?.trim() ? data.phone : 'Not provided';
    const companyDisplay = data.company?.trim() ? data.company : 'Individual / Not specified';

    const textMessage = 
`━━━━━━━━━━━━━━━━━━━━
*FLUXURIOUS TECH • NEW INQUIRY*
━━━━━━━━━━━━━━━━━━━━

• *Client Name:* ${data.name}
• *Email:* ${data.email}
• *Phone:* ${phoneDisplay}
• *Company / Organization:* ${companyDisplay}
• *Service Interested In:* ${formattedProjectType}

────────────────────
*PROJECT BRIEF & REQUIREMENTS:*
────────────────────
${data.message}

━━━━━━━━━━━━━━━━━━━━`;

    const encodedText = encodeURIComponent(textMessage);
    const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodedText}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Open WhatsApp directly with form data pre-filled
      sendToWhatsAppDirect(formData);
      
      // Reset form fields
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        message: ''
      });
      
      alert('Form submitted! Opening WhatsApp to send your message.');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form. Please check your inputs and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      {/* Top Blur Image */}
      <img src={BlurImage} alt="Blur" className="contact-blur-top" />
      
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-header">
            <motion.h1 
              className="contact-title"
              initial={{ opacity: 0, y: -60, scale: 0.8 }}
              whileInView={{ 
                opacity: 1, 
                y: 0, 
                scale: 1,
                transition: {
                  duration: 1,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }
              }}
              viewport={{ amount: 0.3 }}
            >
              Get In Touch With Us
            </motion.h1>
            <motion.p 
              className="contact-subtitle"
              initial={{ opacity: 0, y: -40, scale: 0.9 }}
              whileInView={{ 
                opacity: 1, 
                y: 0, 
                scale: 1,
                transition: {
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: 0.3
                }
              }}
              viewport={{ amount: 0.3 }}
            >
              Ready to start your next project? Let's discuss how we can bring your vision to life with our expert development services.
            </motion.p>
          </div>

          <motion.div 
            className="contact-form-wrapper"
            initial={{ opacity: 0, y: -100, scale: 0.8 }}
            whileInView={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              transition: {
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94]
              }
            }}
            viewport={{ amount: 0.3 }}
          >
            <div className="form-outer">
              <div className="form-inner">
                <div className="form-content">
                  <div className="form-section">
                    <form className="contact-form" onSubmit={handleSubmit}>
                      <div className="form-row">
                        <div className="form-field">
                          <label htmlFor="name">Full Name *</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            placeholder="Enter your full name"
                          />
                        </div>
                        
                        <div className="form-field">
                          <label htmlFor="email">Email Address *</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            placeholder="Enter your email address"
                          />
                        </div>
                      </div>

                      <div className="form-row">
                        <div className="form-field">
                          <label htmlFor="phone">Phone Number</label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="Enter your phone number"
                          />
                        </div>
                        
                        <div className="form-field">
                          <label htmlFor="company">Company Name</label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder="Enter your company name"
                          />
                        </div>
                      </div>

                      <div className="form-field full-width">
                        <label htmlFor="projectType">Select project type</label>
                        <select
                          id="projectType"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="">Select project type</option>
                          <option value="web-development">Web Development</option>
                          <option value="web-design">Web Design</option>
                          <option value="mobile-app">Mobile App Development</option>
                          <option value="full-stack">Full Stack Development</option>
                          <option value="ui-ux">UI/UX Design</option>
                          <option value="consultation">Consultation</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div className="form-field full-width">
                        <label htmlFor="message">Project Details *</label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          placeholder="Tell us about your project requirements, timeline, and any specific features you need..."
                          rows="5"
                        ></textarea>
                      </div>

                      <div className="form-submit">
                        <Button2 type="submit" disabled={isSubmitting}>
                          {isSubmitting ? 'Sending...' : 'Send Message'}
                        </Button2>
                      </div>
                    </form>
                  </div>

                  <div className="form-image">
                    <div className="contact-lottie-container" ref={animContainer}></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Pattern Image */}
      <img src={BottomPattern} alt="Bottom Pattern" className="contact-bottom-pattern" />
    </div>
  );
};

export default ContactUs; 