import React, { useState } from 'react';
import '../../styles/Services/FAQ.css';
import BlurEffect from '../../assets/Blur.png';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HelpCircle, ChevronDown, Sparkles, MessageCircle, 
  ArrowRight, ShieldCheck, Clock, Code2, DollarSign, Layers, CheckCircle2 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const CATEGORIES = ['All', 'Process & Speed', 'Tech & Ownership', 'Pricing & Support'];

const FAQS_DATA = [
  {
    id: 1,
    category: 'Process & Speed',
    question: 'How fast can you build and launch my project?',
    icon: Clock,
    answer: 'We specialize in rapid, structured 4-Week Delivery Sprints from kickoff to live production deployment. Week 1 is dedicated to Strategy & UX Architecture, Week 2 to High-Fidelity UI & Core Backend, Week 3 to Full Integration & APIs, and Week 4 to QA, Lighthouse Optimization, and Production Launch. For focused deliverables like an MVP prototype or landing page, turnaround is typically 3 to 7 days.',
    highlights: ['Structured 4-Week Sprints', '3-7 Day Fast-Track MVPs', 'Weekly Staging Demos']
  },
  {
    id: 2,
    category: 'Process & Speed',
    question: 'What is your communication and sprint management workflow?',
    icon: Layers,
    answer: 'We eliminate bloated agency bureaucracy. You communicate directly with our technical founders and lead engineers via a dedicated WhatsApp/Slack channel and receive weekly interactive staging preview links. You always know exactly what is built, what is next, and when milestones go live.',
    highlights: ['Direct Lead Engineer Access', 'Weekly Live Staging Previews', 'Zero Middlemen']
  },
  {
    id: 3,
    category: 'Tech & Ownership',
    question: 'What technologies and frameworks does Fluxurious Tech use?',
    icon: Code2,
    answer: 'We build with modern, enterprise-grade frameworks tuned for sub-second speeds and 95+ Google PageSpeed scores. Our core stack includes React, Next.js, TypeScript, Tailwind CSS, Framer Motion, Node.js, Express, Python, PostgreSQL, MongoDB, Redis, and Flutter for cross-platform iOS & Android mobile apps.',
    highlights: ['React & Next.js Ecosystem', 'TypeScript Type-Safety', 'Scalable Cloud Architectures']
  },
  {
    id: 4,
    category: 'Tech & Ownership',
    question: 'Do I retain 100% ownership of the source code and assets?',
    icon: ShieldCheck,
    answer: 'Yes, 100%. Upon project milestone completion, you receive complete intellectual property ownership. This includes the full GitHub repository, interactive Figma UI design systems, database schemas, and documentation. No vendor lock-in, no hidden IP licensing fees ever.',
    highlights: ['Full GitHub Repo Handover', 'Complete Figma Design Tokens', 'Zero Vendor Lock-in']
  },
  {
    id: 5,
    category: 'Tech & Ownership',
    question: 'Can you integrate with our existing software, APIs, and databases?',
    icon: Layers,
    answer: 'Absolutely. We architect custom solutions that connect seamlessly to your existing infrastructure. Whether you need Stripe/Razorpay payment gateways, HubSpot/Salesforce CRM sync, custom REST/GraphQL APIs, OpenAI/LLM models, or third-party webhooks, we ensure flawless interoperability.',
    highlights: ['Payment Gateways & CRMs', 'Custom REST & GraphQL Endpoints', 'AI & Cloud Service Hooks']
  },
  {
    id: 6,
    category: 'Pricing & Support',
    question: 'How does your pricing work, and are there hidden costs?',
    icon: DollarSign,
    answer: 'We believe in 100% transparent, flat-fee pricing. Our Starter Sprint begins at $2,499 for rapid web MVPs, and our Pro Full-Stack tier is $4,999 for complete custom web platforms with dedicated backend architecture. All scope deliverables are locked prior to kickoff with zero surprise invoices.',
    highlights: ['Flat-Fee Milestone Billing', 'Zero Hidden Retainer Bloat', 'Scope Locked Upfront']
  },
  {
    id: 7,
    category: 'Pricing & Support',
    question: 'What happens after launch? Do you provide warranty and support?',
    icon: ShieldCheck,
    answer: 'Every project includes a comprehensive 30-day post-launch warranty covering bug fixes, performance monitoring, and team onboarding at zero extra charge. After the warranty period, we offer flexible maintenance sprints and continuous feature development as your business scales.',
    highlights: ['30-Day Full Bug Warranty', 'Post-Launch Performance Monitoring', 'Flexible Growth Sprints']
  },
  {
    id: 8,
    category: 'Process & Speed',
    question: 'How do we get started with Fluxurious Tech?',
    icon: Sparkles,
    answer: 'Getting started takes under 24 hours. Send us a message via our Contact form or directly on WhatsApp (+91 8591903004). We will schedule a focused 20-minute Technical Discovery call, prepare a locked-scope milestone roadmap, and begin sprint development within 48 hours.',
    highlights: ['< 24hr Rapid Response', '20-Min Technical Discovery', 'Kickoff Within 48 Hours']
  }
];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [openIndex, setOpenIndex] = useState(1); // First question open by default

  const filteredFaqs = activeCategory === 'All' 
    ? FAQS_DATA 
    : FAQS_DATA.filter(item => item.category === activeCategory);

  const toggleAccordion = (id) => {
    setOpenIndex(prev => prev === id ? null : id);
  };

  return (
    <section className="faq-section" id="faq">
      <img src={BlurEffect} alt="" className="faq-blur-top" />

      {/* Section Header */}
      <div className="faq-header-wrapper">
        <motion.div 
          className="faq-badge-pill"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <HelpCircle size={14} className="faq-pill-icon" />
          <span>Clear Answers & Transparency</span>
        </motion.div>

        <motion.h2 
          className="faq-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Frequently Asked <span className="gradient-text">Questions</span>
        </motion.h2>

        <motion.p 
          className="faq-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Everything you need to know about our 4-week delivery sprints, engineering standards, deliverables, and guarantees.
        </motion.p>
      </div>

      {/* Category Pills */}
      <motion.div 
        className="faq-categories-bar"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`faq-category-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      {/* FAQ Accordion List */}
      <div className="faq-list">
        {filteredFaqs.map((faq, idx) => {
          const isOpen = openIndex === faq.id;
          const FaqIcon = faq.icon;

          return (
            <motion.div 
              key={faq.id} 
              className={`faq-card ${isOpen ? 'active-card' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <button 
                className="faq-trigger"
                onClick={() => toggleAccordion(faq.id)}
                aria-expanded={isOpen}
              >
                <div className="faq-trigger-left">
                  <div className={`faq-icon-sphere ${isOpen ? 'active-sphere' : ''}`}>
                    <FaqIcon size={18} />
                  </div>
                  <div className="faq-question-meta">
                    <span className="faq-card-category">{faq.category}</span>
                    <h3 className="faq-question-text">{faq.question}</h3>
                  </div>
                </div>

                <div className={`faq-chevron-box ${isOpen ? 'rotated' : ''}`}>
                  <ChevronDown size={20} />
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="answer-content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="faq-answer-collapse"
                  >
                    <div className="faq-answer-inner">
                      <p className="faq-answer-paragraph">{faq.answer}</p>
                      
                      {faq.highlights && faq.highlights.length > 0 && (
                        <div className="faq-highlights-list">
                          {faq.highlights.map((item, hIdx) => (
                            <div key={hIdx} className="faq-highlight-chip">
                              <CheckCircle2 size={14} className="highlight-check-icon" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Still Have Questions CTA Banner */}
      <motion.div 
        className="faq-cta-banner"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="faq-cta-glow" />
        <div className="faq-cta-content">
          <div className="faq-cta-text">
            <span className="faq-cta-badge">STILL HAVE QUESTIONS?</span>
            <h3>Speak directly with our technical team</h3>
            <p>Get immediate clarity on your project scope, architecture, or custom requirements without any sales pressure.</p>
          </div>
          <div className="faq-cta-actions">
            <a 
              href="https://wa.me/918591903004?text=Hi%20Fluxurious%20Tech%2C%20I%20have%20a%20question%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="faq-cta-whatsapp-btn"
            >
              <MessageCircle size={18} />
              <span>Chat on WhatsApp</span>
            </a>
            <Link to="/contact" className="faq-cta-contact-btn">
              <span>Book Discovery Call</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
