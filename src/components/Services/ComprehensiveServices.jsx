import React, { useState } from 'react';
import '../../styles/Services/ComprehensiveServices.css';
import { 
  Palette, Code, Database, MessageCircle, Search, Server, 
  Smartphone, Globe, Zap, Shield, CheckCircle2, ChevronDown,
  Clock, ArrowRight, Layers, Cpu, Sparkles
} from 'lucide-react';
import BlurEffect from '../../assets/Blur.png';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const comprehensiveServices = [
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    tagline: 'High-converting design systems & interactive prototypes.',
    icon: Palette,
    category: 'Design',
    badge: 'Design First',
    turnaround: '3-5 Days',
    projectType: 'ui-ux',
    techStack: ['Figma', 'Protopie', 'Design Tokens', 'Tailwind'],
    highlights: [
      'User Research & Wireframing',
      'Figma Component Design System',
      'Interactive High-Fidelity Prototypes',
      'Mobile-First Responsive Layouts',
      'Developer-Ready Handoff'
    ],
    deliverable: 'Figma Source Files + Interactive Prototype + Style Guide',
    process: [
      'Discovery & Brand Alignment',
      'Wireframing & Information Architecture',
      'Visual Design & Design System',
      'Interactive Prototyping & Usability Review',
      'Full Asset Export & Dev Handoff'
    ]
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    tagline: 'Blazing fast, animated, and pixel-perfect web experiences.',
    icon: Code,
    category: 'Development',
    badge: 'Popular',
    turnaround: '5-7 Days',
    projectType: 'web-development',
    techStack: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'],
    highlights: [
      'Modern Single Page & Multi-Page Apps',
      'Smooth 60fps Micro-interactions & Animations',
      'Mobile-First & 100% Cross-Browser Support',
      'Core Web Vitals & 95+ PageSpeed Optimization',
      'REST & GraphQL API Integration'
    ],
    deliverable: 'Clean Modular Source Code + Live Deployment + Docs',
    process: [
      'UI Architecture & Component Setup',
      'Interactive Views & State Management',
      'API Hooks & Data Integration',
      'Cross-Device Polish & Speed Tuning',
      'Production Deployment'
    ]
  },
  {
    id: 'backend',
    title: 'Backend & Database Systems',
    tagline: 'Scalable APIs, resilient database architecture, and security.',
    icon: Database,
    category: 'Development',
    badge: 'Core Tech',
    turnaround: '5-7 Days',
    projectType: 'full-stack',
    techStack: ['Node.js', 'Python', 'PostgreSQL', 'Redis', 'Docker'],
    highlights: [
      'RESTful & GraphQL API Architecture',
      'Relational & NoSQL Schema Design',
      'JWT Auth, OAuth & Role-Based Access Control',
      'Caching, Rate Limiting & Query Optimization',
      'Automated Database Backups & Migration Pipelines'
    ],
    deliverable: 'Tested Backend API + OpenAPI/Swagger Docs + DB Schema',
    process: [
      'Data Modeling & Schema Architecture',
      'API Endpoint & Business Logic Creation',
      'Authentication & Security Hardening',
      'Stress Testing & Caching',
      'Cloud Provisioning & Live Deployment'
    ]
  },
  {
    id: 'mobile',
    title: 'Mobile App Development',
    tagline: 'Cross-platform iOS and Android apps with native feel.',
    icon: Smartphone,
    category: 'Development',
    badge: 'High Impact',
    turnaround: '7-14 Days',
    projectType: 'mobile-app',
    techStack: ['React Native', 'Flutter', 'Expo', 'Firebase', 'Native APIs'],
    highlights: [
      'Universal iOS & Android Single Codebase',
      'Push Notifications & Offline Data Caching',
      'Hardware Access (Camera, Biometrics, GPS)',
      'Smooth 60fps Native Gestures & Transitions',
      'App Store & Play Store Ready Builds'
    ],
    deliverable: 'Production APK/IPA Builds + Source Repository + Setup Guide',
    process: [
      'App Architecture & UI Prototyping',
      'Core Feature Implementation',
      'Native Module & Push Integration',
      'Multi-Device Emulation & Device Testing',
      'Store Submission Preparation'
    ]
  },
  {
    id: 'fullstack',
    title: 'Full Stack & Cloud Deployment',
    tagline: 'End-to-end turnkey platforms built from scratch to launch.',
    icon: Server,
    category: 'Development',
    badge: 'Full Suite',
    turnaround: '7-10 Days',
    projectType: 'full-stack',
    techStack: ['React/Next.js', 'Node.js', 'PostgreSQL', 'AWS/Vercel', 'CI/CD'],
    highlights: [
      'Complete Unified Web Application Architecture',
      'Automated CI/CD Deployment Pipelines',
      'Custom Domain, SSL & Cloudflare CDN Setup',
      'Cloud Hosting (AWS, Vercel, Supabase)',
      'Full Monitoring, Analytics & Error Logging'
    ],
    deliverable: 'Turnkey Live Application + Full Admin Privileges & Docs',
    process: [
      'Full System Architecture & Roadmap',
      'Simultaneous Frontend & Backend Sprints',
      'End-to-End Integration & Security Audit',
      'Staging Deployment & QA Validation',
      'Production Launch & Post-Launch Handover'
    ]
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce & Payment Engines',
    tagline: 'High-converting online stores with bulletproof checkout.',
    icon: Globe,
    category: 'Business',
    badge: 'Revenue Focused',
    turnaround: '5-7 Days',
    projectType: 'web-development',
    techStack: ['Stripe', 'Razorpay', 'Next.js', 'Shopify/Custom', 'Tailwind'],
    highlights: [
      'Seamless Checkout & Multi-Currency Gateways',
      'Catalog, Inventory & Variant Management',
      'Customer Order Tracking & Email Receipts',
      'Discount Coupons & Upsell Recommendation Logic',
      'Mobile-Optimized 1-Click Purchase Experience'
    ],
    deliverable: 'Ready-to-Sell Online Store + Gateway Integration + Training',
    process: [
      'Product Schema & Catalog Blueprint',
      'Storefront UI & Cart Flow Engineering',
      'Payment Gateway & Webhook Integration',
      'Order Lifecycle & Tax Testing',
      'Live Launch & Payment Verification'
    ]
  },
  {
    id: 'ai-chatbot',
    title: 'AI Agents & Smart Chatbots',
    tagline: 'Intelligent automated customer engagement and workflows.',
    icon: MessageCircle,
    category: 'AI',
    badge: 'Next-Gen',
    turnaround: '3-5 Days',
    projectType: 'other',
    techStack: ['OpenAI / Gemini', 'LangChain', 'Vector DB', 'WhatsApp API'],
    highlights: [
      'Custom Context-Aware Knowledge Base Q&A',
      'WhatsApp & Website Embeddable Widgets',
      '24/7 Automated Lead Capture & Qualification',
      'CRM & Google Sheets Instant Sync',
      'Smart Human Agent Fallback Routing'
    ],
    deliverable: 'Embedded Chatbot / WhatsApp Bot + Admin Control Dashboard',
    process: [
      'Knowledge Base Ingestion & Prompt Tuning',
      'Bot Conversational Logic & Tool Calling',
      'Platform Integration (Web / WhatsApp)',
      'Accuracy & Guardrail Testing',
      'Monitoring & Performance Tuning'
    ]
  },
  {
    id: 'seo-marketing',
    title: 'SEO & Organic Growth',
    tagline: 'Rank higher on Google with technical SEO and structured data.',
    icon: Search,
    category: 'Marketing',
    badge: 'Growth Engine',
    turnaround: '3-5 Days',
    projectType: 'consultation',
    techStack: ['Schema.org', 'Google Search Console', 'Ahrefs', 'Next SEO'],
    highlights: [
      'Technical SEO Audit & Speed Fixes',
      'Rich Snippets & JSON-LD Structured Data',
      'Keyword Research & High-Intent Page Targeting',
      'Google Search Console & Analytics Setup',
      'Local GEO Ranking & Google Business Optimization'
    ],
    deliverable: 'Audit Report + On-Page Implementation + Actionable Roadmap',
    process: [
      'Deep Technical SEO & Crawl Audit',
      'Keyword Strategy & Content Architecture',
      'Meta Tags, Schema & Canonical Fixes',
      'Sitemap & Indexing Submission',
      'Ranking Baseline & Performance Dashboard'
    ]
  }
];

const processSteps = [
  {
    step: '01',
    title: 'Discovery & Scope',
    description: 'We align on your product vision, define must-have features, and create a locked 7-day or sprint delivery roadmap.',
    icon: Layers
  },
  {
    step: '02',
    title: 'Architecture & UI Design',
    description: 'Crafting responsive layouts, interactive components, and database schemas with crystal-clear visual hierarchy.',
    icon: Palette
  },
  {
    step: '03',
    title: 'Agile Development',
    description: 'Writing high-performance, modular code backed by automated testing and continuous preview staging links.',
    icon: Code
  },
  {
    step: '04',
    title: 'QA & Optimization',
    description: 'Rigorous cross-device testing, lighthouse speed tuning, SSL security, and payment/database stress testing.',
    icon: Zap
  },
  {
    step: '05',
    title: 'Launch & Handover',
    description: 'Deploying to production, configuring custom domains, and handing over 100% IP code ownership with complete docs.',
    icon: Shield
  }
];

const trustBadges = [
  { icon: Clock, title: 'Rapid Delivery', subtitle: 'Turnaround in 3 to 7 days' },
  { icon: Cpu, title: 'Clean Architecture', subtitle: 'Modular, scalable code' },
  { icon: Shield, title: '100% IP Ownership', subtitle: 'Full code & design handover' },
  { icon: Sparkles, title: 'Clear Communication', subtitle: 'Direct developer access' }
];

const ComprehensiveServices = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedProcess, setExpandedProcess] = useState(null);
  const navigate = useNavigate();

  const categories = ['All', 'Development', 'Design', 'Business', 'AI', 'Marketing'];

  const filteredServices = selectedCategory === 'All' 
    ? comprehensiveServices 
    : comprehensiveServices.filter(service => service.category === selectedCategory);

  const toggleProcess = (id) => {
    setExpandedProcess(prev => prev === id ? null : id);
  };

  const handleInquire = () => {
    navigate('/contact');
  };

  return (
    <section className="comprehensive-services">
      <img src={BlurEffect} alt="" className="blur-top-effect" />
      
      {/* Section Header */}
      <div className="services-section-header">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="header-pill"
        >
          <Sparkles size={14} className="pill-icon" />
          <span>Tailored Engineering & Design</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="section-title"
        >
          Everything You Need to <span className="gradient-text">Build, Launch & Scale</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="section-subtitle"
        >
          All deliverables, tech stacks, and features clearly defined upfront — no guesswork, no bloated timelines.
        </motion.p>
      </div>

      {/* Trust Highlights Strip */}
      <div className="trust-strip-container">
        <div className="trust-strip">
          {trustBadges.map((badge, idx) => (
            <motion.div 
              key={idx} 
              className="trust-badge-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="trust-icon-box">
                <badge.icon size={20} />
              </div>
              <div className="trust-badge-text">
                <strong>{badge.title}</strong>
                <span>{badge.subtitle}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="category-filter-wrapper">
        <div className="category-filter-bar">
          {categories.map((cat) => {
            const count = cat === 'All' 
              ? comprehensiveServices.length 
              : comprehensiveServices.filter(s => s.category === cat).length;
            const isActive = selectedCategory === cat;

            return (
              <button
                key={cat}
                className={`category-chip ${isActive ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                <span>{cat}</span>
                <span className="chip-count">{count}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Structured Services Grid */}
      <div className="services-container">
        <div className="services-modern-grid">
          {filteredServices.map((service, index) => {
            const Icon = service.icon;
            const isProcessOpen = expandedProcess === service.id;

            return (
              <motion.div
                key={service.id}
                className="service-card-modern"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                {/* Top Row: Category badge + Turnaround Pill */}
                <div className="card-top-bar">
                  <span className="card-badge">{service.badge}</span>
                  <div className="card-turnaround">
                    <Clock size={13} />
                    <span>{service.turnaround}</span>
                  </div>
                </div>

                {/* Card Title & Icon Header */}
                <div className="card-head">
                  <div className="card-icon-frame">
                    <Icon size={26} />
                  </div>
                  <div className="card-title-group">
                    <h3 className="card-title">{service.title}</h3>
                    <p className="card-tagline">{service.tagline}</p>
                  </div>
                </div>

                {/* Tech Stack Chips upfront */}
                <div className="tech-stack-row">
                  {service.techStack.map((tech, tIdx) => (
                    <span key={tIdx} className="tech-chip">{tech}</span>
                  ))}
                </div>

                {/* Divider */}
                <div className="card-divider" />

                {/* What's Included Upfront List */}
                <div className="features-section">
                  <div className="section-label">Key Highlights:</div>
                  <ul className="features-checklist">
                    {service.highlights.map((item, fIdx) => (
                      <li key={fIdx}>
                        <CheckCircle2 size={16} className="check-icon" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Deliverable Box Upfront */}
                <div className="deliverable-card-box">
                  <span className="deliverable-label">Package Output</span>
                  <p className="deliverable-text">{service.deliverable}</p>
                </div>

                {/* Collapsible Process Toggle */}
                <div className="card-accordion">
                  <button 
                    className={`accordion-trigger ${isProcessOpen ? 'expanded' : ''}`}
                    onClick={() => toggleProcess(service.id)}
                    type="button"
                  >
                    <span>View Development Workflow ({service.process.length} steps)</span>
                    <ChevronDown size={16} className="chevron-icon" />
                  </button>

                  <AnimatePresence>
                    {isProcessOpen && (
                      <motion.div
                        className="accordion-content"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ol className="process-mini-timeline">
                          {service.process.map((pStep, pIdx) => (
                            <li key={pIdx}>
                              <span className="mini-step-num">{pIdx + 1}</span>
                              <span className="mini-step-text">{pStep}</span>
                            </li>
                          ))}
                        </ol>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Card Action Footer */}
                <div className="card-action-bar">
                  <button
                    className="card-cta-btn"
                    onClick={handleInquire}
                  >
                    <span>Start This Project</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Development Process Road Section */}
      <div className="process-showcase-section">
        <div className="process-header">
          <span className="process-pretitle">HOW WE EXECUTE</span>
          <h2>Our 5-Step Rapid Delivery Method</h2>
          <p>From initial brief to production launch with absolute precision, daily clarity, and zero stress.</p>
        </div>

        <div className="process-steps-track">
          {processSteps.map((step, idx) => {
            const StepIcon = step.icon;
            return (
              <motion.div
                key={idx}
                className="step-track-node"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
              >
                <div className="step-node-header">
                  <span className="step-counter-badge">{step.step}</span>
                  <div className="step-node-icon">
                    <StepIcon size={22} />
                  </div>
                </div>
                <h4 className="step-node-title">{step.title}</h4>
                <p className="step-node-desc">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ComprehensiveServices; 