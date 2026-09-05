import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import PricingHero from '../components/Pricing/PricingHero.jsx';
import PricingPlans from '../components/Pricing/PricingPlans.jsx';
import PricingContent from '../components/ContactUs.jsx';
import SEOHead from '../components/SEOHead.jsx';

const Pricing = () => {
  return (
    <main className="home-container">
      <SEOHead
        title="Pricing — Transparent Sprint-Based Plans"
        description="Transparent pricing for web development, mobile apps & UI/UX design. Structured 4-week sprint plans with no hidden fees. Start your project today."
        canonicalPath="/pricing"
      />
      <Navbar />
      <PricingHero />
      <PricingPlans />
      <div className="pricing-container">
        <PricingContent />
      </div>
      <Footer />
    </main>
  );
};

export default Pricing;  
