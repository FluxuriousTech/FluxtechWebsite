import React from 'react';
import Navbar from '../components/Navbar.jsx';
import HomeContent from '../components/Home/hero.jsx';
import WhatWeBuild from '../components/Home/whatwebuild.jsx';
import WhatsUnderHood from '../components/Home/WhatsUnderHood.jsx';
import HowWeDeliver from '../components/Home/HowWeDeliver.jsx';
import OurWork from '../components/Home/OurWork.jsx';
import Testimonials from '../components/Home/Testimonials.jsx';
import ContactUs from '../components/ContactUs.jsx';
import Footer from '../components/Footer.jsx';
import SEOHead from '../components/SEOHead.jsx';

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Fluxurious Tech",
  "url": "https://www.fluxurioustech.com",
  "logo": "https://www.fluxurioustech.com/favicon.png",
  "description": "Custom digital products built with precision. Web development, mobile apps & MVP studio in Mumbai.",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-8591903004",
    "contactType": "sales",
    "areaServed": ["IN", "US", "GB", "AE"],
    "availableLanguage": ["English", "Hindi"]
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Thane",
    "addressRegion": "Maharashtra",
    "addressCountry": "IN"
  },
  "email": "fluxurioustech@gmail.com",
  "foundingLocation": "Mumbai, India",
  "knowsAbout": [
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "MVP Development",
    "Backend Systems",
    "Cloud Deployment"
  ]
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Fluxurious Tech",
  "url": "https://www.fluxurioustech.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.fluxurioustech.com/?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

const Home = () => {
  return (
    <div className="home-container">
      <SEOHead
        title="Fluxurious Tech — Launch-Ready Websites & Apps | MVPs Built in 1 Week"
        description="Custom digital products built with precision. Web development, mobile apps & MVP studio in Mumbai. Launch-ready websites & apps delivered in 4-week sprints."
        canonicalPath="/"
        structuredData={[organizationSchema, websiteSchema]}
      />
      <Navbar />
      <HomeContent />
      <WhatWeBuild />
      <OurWork />
      <WhatsUnderHood />
      <HowWeDeliver />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;