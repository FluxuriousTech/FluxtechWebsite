import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import ServicesHero from '../components/Services/ServicesHero.jsx';
import ComprehensiveServices from '../components/Services/ComprehensiveServices.jsx';
import FAQ from '../components/Services/FAQ.jsx';
import SEOHead from '../components/SEOHead.jsx';

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How fast can you build and launch my project?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We specialize in rapid, structured 4-Week Delivery Sprints from kickoff to live production deployment. Week 1 is dedicated to Strategy & UX Architecture, Week 2 to High-Fidelity UI & Core Backend, Week 3 to Full Integration & APIs, and Week 4 to QA, Lighthouse Optimization, and Production Launch. For focused deliverables like an MVP prototype or landing page, turnaround is typically 3 to 7 days."
      }
    },
    {
      "@type": "Question",
      "name": "What technologies and frameworks does Fluxurious Tech use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We build with modern, enterprise-grade frameworks tuned for sub-second speeds and 95+ Google PageSpeed scores. Our core stack includes React, Next.js, TypeScript, Tailwind CSS, Framer Motion, Node.js, Express, Python, PostgreSQL, MongoDB, Redis, and Flutter for cross-platform iOS & Android mobile apps."
      }
    },
    {
      "@type": "Question",
      "name": "Do I retain 100% ownership of the source code and assets?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, 100%. Upon project milestone completion, you receive complete intellectual property ownership. This includes the full GitHub repository, interactive Figma UI design systems, database schemas, and documentation. No vendor lock-in, no hidden IP licensing fees ever."
      }
    },
    {
      "@type": "Question",
      "name": "How does your pricing work, and are there hidden costs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We believe in 100% transparent, flat-fee pricing. Our Starter Sprint begins at $2,499 for rapid web MVPs, and our Pro Full-Stack tier is $4,999 for complete custom web platforms with dedicated backend architecture. All scope deliverables are locked prior to kickoff with zero surprise invoices."
      }
    },
    {
      "@type": "Question",
      "name": "What happens after launch? Do you provide warranty and support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Every project includes a comprehensive 30-day post-launch warranty covering bug fixes, performance monitoring, and team onboarding at zero extra charge. After the warranty period, we offer flexible maintenance sprints and continuous feature development as your business scales."
      }
    },
    {
      "@type": "Question",
      "name": "Can you integrate with our existing software, APIs, and databases?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. We architect custom solutions that connect seamlessly to your existing infrastructure. Whether you need Stripe/Razorpay payment gateways, HubSpot/Salesforce CRM sync, custom REST/GraphQL APIs, OpenAI/LLM models, or third-party webhooks, we ensure flawless interoperability."
      }
    },
    {
      "@type": "Question",
      "name": "What is your communication and sprint management workflow?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We eliminate bloated agency bureaucracy. You communicate directly with our technical founders and lead engineers via a dedicated WhatsApp/Slack channel and receive weekly interactive staging preview links. You always know exactly what is built, what is next, and when milestones go live."
      }
    },
    {
      "@type": "Question",
      "name": "How do we get started with Fluxurious Tech?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Getting started takes under 24 hours. Send us a message via our Contact form or directly on WhatsApp (+91 8591903004). We will schedule a focused 20-minute Technical Discovery call, prepare a locked-scope milestone roadmap, and begin sprint development within 48 hours."
      }
    }
  ]
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Software Development",
  "provider": {
    "@type": "Organization",
    "name": "Fluxurious Tech",
    "url": "https://www.fluxurioustech.com"
  },
  "areaServed": ["IN", "US", "GB", "AE"],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Digital Product Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "UI/UX Design",
          "description": "High-converting design systems & interactive prototypes with Figma."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Frontend Development",
          "description": "Blazing fast React & Next.js web experiences with 95+ PageSpeed scores."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Backend & Database Systems",
          "description": "Scalable APIs, resilient database architecture with Node.js, Python, PostgreSQL."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Mobile App Development",
          "description": "Cross-platform iOS & Android apps built with Flutter."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Cloud & DevOps Deployment",
          "description": "Production deployment with AWS, Vercel, Docker, and CI/CD pipelines."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI Chatbots & Automation",
          "description": "Custom AI chatbots and workflow automation with OpenAI and LLM integrations."
        }
      }
    ]
  }
};

const Services = () => {
  return (
    <main className="home-container">
      <SEOHead
        title="Our Services — Web Development, Mobile Apps & UI/UX Design"
        description="Full-stack development services: UI/UX design, React frontend, Node.js backend, mobile apps, cloud deployment & AI chatbots. From design to deployment in 4 weeks."
        canonicalPath="/services"
        structuredData={[faqSchema, serviceSchema]}
      />
      <Navbar />
      <ServicesHero />
      <ComprehensiveServices />
      <FAQ />
      <Footer />
    </main>
  );
};

export default Services;
