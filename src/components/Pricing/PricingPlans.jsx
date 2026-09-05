import React from 'react';
import { 
  CheckCircle2, Sparkles, Palette, Code2, Smartphone, 
  Layers, ShieldCheck, ArrowRight, MessageCircle, Tag, Clock
} from 'lucide-react';
import '../../styles/Pricing/PricingPlans.css';
import Button2 from '../Button2.jsx';
import BlurImage from '../../assets/Blur.png';
import BottomPattern from '../../assets/bottom_pattern.png';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SERVICE_PACKAGES = [
  {
    id: 'design',
    name: 'UI/UX Design & Prototype',
    category: 'Design Sprint',
    badge: 'Fast Turnaround',
    price: '$1,499',
    period: ' / project',
    turnaround: '3-5 Days',
    icon: Palette,
    isPopular: false,
    description: 'Perfect for startups and businesses looking to validate concepts, craft design systems, and build high-converting prototypes before writing code.',
    deliverables: [
      'Interactive Figma design system & tokens',
      'UX user journey & wireframing sprints',
      'High-fidelity clickable prototype',
      'Mobile-first responsive viewports',
      'Developer-ready handoff documentation'
    ],
    ctaText: 'Select Design Package',
    contactPackage: 'UI/UX Design & Prototype'
  },
  {
    id: 'fullstack',
    name: 'Full-Stack Web Platform',
    category: 'Development Sprint',
    badge: 'Most Popular',
    price: '$3,499',
    period: ' / project',
    turnaround: '2-3 Weeks',
    icon: Code2,
    isPopular: true,
    description: 'Our flagship full-stack web package. We engineer custom, scalable web applications with robust backend APIs, databases, and lightning-fast speed.',
    deliverables: [
      'Modern React / Next.js / TypeScript frontend',
      'Custom backend APIs (Node.js / Python)',
      'Database architecture (PostgreSQL / Supabase / Mongo)',
      '95+ Google PageSpeed & SEO optimization',
      'Payment gateway (Stripe / Razorpay) & CRM sync',
      '100% Code ownership & GitHub repo transfer',
      '30-Day comprehensive post-launch warranty'
    ],
    ctaText: 'Choose Full-Stack Web',
    contactPackage: 'Full-Stack Web Platform'
  },
  {
    id: 'mobile',
    name: 'Cross-Platform Mobile App',
    category: 'Mobile Sprint',
    badge: 'iOS & Android',
    price: '$3,999',
    period: ' / project',
    turnaround: '3-4 Weeks',
    icon: Smartphone,
    isPopular: false,
    description: 'Universal mobile applications built for both iOS and Android from a single performant codebase with native device features and offline sync.',
    deliverables: [
      'Universal iOS & Android app (React Native / Flutter)',
      'Native hardware access (Camera, Biometrics, Push notifications)',
      'Secure authentication & cloud database sync',
      'Smooth 60fps animations & fluid mobile UI',
      'App Store & Google Play deployment guidance',
      '100% Source code & asset handover',
      '30-Day post-launch bug warranty'
    ],
    ctaText: 'Select Mobile Package',
    contactPackage: 'Cross-Platform Mobile App'
  }
];

const PricingPlans = () => {
  return (
    <div className="pricing-plans">
      <img src={BlurImage} alt="Blur" className="pricing-plans-blur-top" />

      {/* Header Section */}
      <div className="pricing-plans-header">
        <motion.div 
          className="pricing-badge-pill"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Sparkles size={14} className="pill-sparkle" />
          <span>Transparent Flat-Fee Sprints</span>
        </motion.div>

        <motion.h2 
          className="pricing-plans-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Curated Service <span className="gradient-text">Packages</span>
        </motion.h2>

        <motion.p 
          className="pricing-plans-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          No ambiguous retainers, hourly bloat, or guesswork. Every package includes clear deliverables, 100% intellectual property handover, and post-launch support.
        </motion.p>
      </div>

      {/* Packages Grid */}
      <div className="pricing-plans-container">
        {SERVICE_PACKAGES.map((plan, index) => {
          const PlanIcon = plan.icon;
          return (
            <motion.div 
              key={plan.id} 
              className={`pricing-card ${plan.isPopular ? 'popular' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {plan.isPopular && (
                <div className="popular-ribbon">
                  <Sparkles size={12} />
                  <span>{plan.badge}</span>
                </div>
              )}

              <div className="card-top-row">
                <div className={`package-icon-box ${plan.isPopular ? 'popular-icon' : ''}`}>
                  <PlanIcon size={22} />
                </div>
                {!plan.isPopular && (
                  <span className="package-category-pill">{plan.badge}</span>
                )}
              </div>

              <h3 className="package-name">{plan.name}</h3>
              <p className="plan-description">{plan.description}</p>

              <div className="price-container">
                <div className="price-row">
                  <span className="price-prefix">From</span>
                  <span className="price-amount">{plan.price}</span>
                  <span className="price-period">{plan.period}</span>
                </div>
                <div className="turnaround-pill">
                  <Clock size={13} />
                  <span>Turnaround: {plan.turnaround}</span>
                </div>
              </div>

              <div className="deliverables-divider" />

              <div className="deliverables-header">WHAT'S INCLUDED:</div>
              <ul className="plan-features">
                {plan.deliverables.map((item, dIdx) => (
                  <li key={dIdx} className="feature-item">
                    <CheckCircle2 size={16} className="check-icon" />
                    <span className="feature-text">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="card-cta-wrapper">
                <Link to={`/contact?package=${encodeURIComponent(plan.contactPackage)}`} className="package-cta-link">
                  <button className={`package-action-btn ${plan.isPopular ? 'primary-btn' : 'secondary-btn'}`}>
                    <span>{plan.ctaText}</span>
                    <ArrowRight size={16} />
                  </button>
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Multi-Service Bundle & Custom Packages Banner */}
      <div className="bundle-banner-wrapper">
        <motion.div 
          className="bundle-discount-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="bundle-ambient-glow" />

          <div className="bundle-header-area">
            <div className="bundle-discount-badge">
              <Tag size={14} />
              <span>BUNDLE & SAVE UP TO 20%</span>
            </div>
            <h3 className="bundle-title">
              Looking for a Combined Package? <span className="gradient-text">(e.g., Web + Mobile Together)</span>
            </h3>
            <p className="bundle-description">
              Need a complete digital ecosystem with both a high-performance web platform and cross-platform mobile apps? We offer dedicated multi-service discounts when multiple services are commissioned together under one synchronized development sprint.
            </p>
          </div>

          <div className="bundle-features-grid">
            <div className="bundle-perk-item">
              <div className="bundle-perk-icon">
                <Tag size={18} />
              </div>
              <div className="bundle-perk-info">
                <strong>Multi-Service Discounts</strong>
                <span>Save 15% to 20% on overall project budget when bundling Web, Mobile, and UI/UX together.</span>
              </div>
            </div>

            <div className="bundle-perk-item">
              <div className="bundle-perk-icon">
                <Layers size={18} />
              </div>
              <div className="bundle-perk-info">
                <strong>Unified Architecture</strong>
                <span>Shared backend API, single database schema, and unified Figma design system for both Web and Apps.</span>
              </div>
            </div>

            <div className="bundle-perk-item">
              <div className="bundle-perk-icon">
                <Clock size={18} />
              </div>
              <div className="bundle-perk-info">
                <strong>Synchronized Delivery</strong>
                <span>Coordinated development timelines with simultaneous QA and cross-platform release.</span>
              </div>
            </div>

            <div className="bundle-perk-item">
              <div className="bundle-perk-icon">
                <ShieldCheck size={18} />
              </div>
              <div className="bundle-perk-info">
                <strong>Direct Lead Communication</strong>
                <span>One technical point of contact for your entire digital ecosystem with zero agency bloat.</span>
              </div>
            </div>
          </div>

          <div className="bundle-actions-container">
            <div className="bundle-cta-prompt">
              <strong>Have a custom requirement or specific service mix in mind?</strong>
              <span>Reach out to our engineering leads for a personalized scope and bundled quote within 24 hours.</span>
            </div>
            <div className="bundle-buttons-row">
              <a 
                href="https://wa.me/918591903004?text=Hi%20Fluxurious%20Tech%2C%20I'm%20interested%20in%20a%20combined%20package%20(e.g.%20Web%20%2B%20Mobile%20Dev)%20and%20learning%20more%20about%20your%20multi-service%20discounts."
                target="_blank"
                rel="noopener noreferrer"
                className="bundle-whatsapp-btn"
              >
                <MessageCircle size={18} />
                <span>Chat on WhatsApp</span>
              </a>
              <Link to="/contact?type=bundle" className="bundle-quote-btn">
                <span>Request Custom Package Quote</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Pattern Image */}
      <img src={BottomPattern} alt="Bottom Pattern" className="pricing-plans-bottom-pattern" />
    </div>
  );
};

export default PricingPlans;