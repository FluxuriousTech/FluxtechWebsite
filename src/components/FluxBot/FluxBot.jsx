import React, { useState, useRef, useEffect } from 'react';
import '../../styles/FluxBot.css';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bot, X, Send, RotateCcw, Sparkles, MessageSquare, 
  ExternalLink, ArrowUpRight, Zap, CheckCircle2, ChevronRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Comprehensive Built-in FAQ Knowledge Base
const FAQ_DATABASE = [
  {
    id: 'sprints',
    triggerPill: '⚡ How fast is delivery?',
    keywords: ['fast', 'speed', 'delivery', 'time', 'how long', 'sprint', 'turnaround', 'days', 'weeks', 'duration', 'timeline'],
    answer: `We specialize in rapid, structured 4-Week Sprints from initial kickoff to live production deployment.\n\n• Week 1: Strategy, UX Mapping & System Architecture\n• Week 2: High-Fidelity UI/UX & Core Backend\n• Week 3: Interactive Assembly & Full API Integration\n• Week 4: Polish, QA & Production Deployment\n\nFor modular or smaller projects (like a UI/UX prototype or landing MVP), turnaround is typically 3 to 7 days.`,
    action: { label: 'Explore 4-Week Sprints', link: '/services' }
  },
  {
    id: 'pricing',
    triggerPill: '💰 Pricing & packages',
    keywords: ['price', 'pricing', 'cost', 'how much', 'quote', 'rate', 'package', 'starter', 'pro', 'plan', 'fees'],
    answer: `We operate with 100% transparent, flat-fee pricing with zero hidden costs or agency bloat:\n\n• Starter Sprint ($2,499): Rapid MVP web application in 2-3 weeks\n• Pro Full-Stack ($4,999): Comprehensive web platform + custom backend + database in 4 weeks\n• Custom Enterprise: Tailored architectures, cross-platform apps, and high-scale cloud infrastructure\n\nAll tiers include full IP ownership, Figma files, and 30-day post-launch warranty.`,
    action: { label: 'View Transparent Pricing', link: '/pricing' }
  },
  {
    id: 'techstack',
    triggerPill: '🛠️ What is your tech stack?',
    keywords: ['tech', 'stack', 'technology', 'technologies', 'react', 'next', 'node', 'python', 'database', 'sql', 'postgres', 'tools'],
    answer: `We use modern, enterprise-grade technologies optimized for speed, scalability, and 95+ PageSpeed performance:\n\n• Frontend: React, Next.js, TypeScript, Tailwind CSS, Framer Motion\n• Backend: Node.js, Express, Python, REST & GraphQL APIs\n• Databases: PostgreSQL, MongoDB, Redis, Supabase\n• Cloud & DevOps: AWS, Vercel, Docker, CI/CD pipelines\n• Mobile: React Native, Flutter for native iOS & Android`,
    action: { label: 'See Tech Stack Details', link: '/services' }
  },
  {
    id: 'deliverables',
    triggerPill: '📦 Deliverables & code ownership',
    keywords: ['deliverable', 'deliverables', 'ownership', 'code', 'ip', 'github', 'repo', 'figma', 'handover', 'assets'],
    answer: `When your sprint finishes, you own 100% of everything we build:\n\n1. Clean, modular source code repository (GitHub / GitLab)\n2. Interactive Figma files, components & Design Tokens\n3. Production cloud deployment with custom domain & SSL\n4. OpenAPI / Swagger docs & Architecture documentation\n5. Recorded video walkthrough explaining codebase structure`,
    action: { label: 'View Case Studies', link: '/projects' }
  },
  {
    id: 'mobile',
    triggerPill: '📱 Do you build mobile apps?',
    keywords: ['mobile', 'app', 'apps', 'ios', 'android', 'flutter', 'react native', 'phone', 'smartphone'],
    answer: `Yes! We engineer universal cross-platform mobile apps for iOS and Android using React Native and Flutter.\n\n• Native 60fps animations and fluid UI\n• Device hardware access (Camera, Biometrics, Push Notifications, GPS)\n• Offline caching & real-time synchronization\n• Store submission guidance for Apple App Store & Google Play.`,
    action: { label: 'Explore Mobile Services', link: '/services' }
  },
  {
    id: 'whatsapp',
    triggerPill: '💬 Chat on WhatsApp',
    keywords: ['whatsapp', 'call', 'talk', 'human', 'phone', 'speak', 'founder', 'chat', 'direct', 'person', 'contact'],
    answer: `Want to talk to a human right away? You can chat directly with our founders and engineering leads on WhatsApp.\n\nPhone: +91 8591903004\nEmail: fluxurioustech@gmail.com\nTypical response time: Under 2 to 4 hours.`,
    externalAction: { label: 'Open WhatsApp Chat', url: 'https://wa.me/918591903004?text=Hi%20Fluxurious%20Tech%2C%20I%20have%20a%20question%20about%20your%20services.' }
  },
  {
    id: 'process',
    triggerPill: '🚀 How to get started?',
    keywords: ['start', 'begin', 'onboard', 'hire', 'process', 'step', 'how do we start', 'kickoff', 'brief'],
    answer: `Getting started is simple and takes less than 24 hours:\n\n1. Reach out via our Contact form or directly on WhatsApp\n2. We schedule a 20-minute Technical Discovery call\n3. We send a fixed-scope roadmap and milestone agreement\n4. Kickoff Sprint commences within 48 hours!`,
    action: { label: 'Schedule Briefing', link: '/contact' }
  },
  {
    id: 'support',
    triggerPill: '🛡️ Revisions & Warranty',
    keywords: ['revision', 'revisions', 'changes', 'warranty', 'support', 'maintenance', 'bugs', 'guarantee'],
    answer: `Every project includes:\n\n• Weekly review checkpoints for agile adjustments\n• 30-day comprehensive post-launch warranty for bug fixes and performance tuning\n• Dedicated support channel with zero extra retainer required during warranty.`,
    action: { label: 'Learn More', link: '/about' }
  }
];

const INITIAL_MESSAGES = [
  {
    id: 1,
    sender: 'bot',
    text: `Hey there! 👋 I'm **FluxBot**, your AI Sprint Assistant at Fluxurious Tech.\n\nHow can I help you today? Feel free to tap a topic below or type any question!`,
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }
];

const FluxBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [unreadPing, setUnreadPing] = useState(true);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setUnreadPing(false);
    }
  }, [messages, isOpen]);

  // Answer matching engine
  const findAnswer = (query) => {
    const qLower = query.toLowerCase().trim();

    // Direct greetings
    if (['hi', 'hello', 'hey', 'greetings', 'yo', 'sup'].some(g => qLower === g || qLower.startsWith(g + ' '))) {
      return {
        answer: `Hello! Great to meet you. I can tell you all about our 4-week development sprints, transparent pricing, tech stack, or connect you directly with the team. What's on your mind?`,
        suggested: ['sprints', 'pricing', 'techstack', 'whatsapp']
      };
    }

    // Who are you / about
    if (qLower.includes('who are you') || qLower.includes('what are you') || qLower.includes('fluxbot')) {
      return {
        answer: `I'm **FluxBot**, the official virtual guide for Fluxurious Tech! I'm trained on all our agency capabilities, turnaround timelines, pricing structures, and engineering practices.`,
        suggested: ['sprints', 'deliverables', 'whatsapp']
      };
    }

    // Score based on keyword matches
    let bestMatch = null;
    let highestScore = 0;

    for (const item of FAQ_DATABASE) {
      let score = 0;
      for (const kw of item.keywords) {
        if (qLower.includes(kw)) {
          score += kw.length; // weight longer specific keywords higher
        }
      }
      if (score > highestScore) {
        highestScore = score;
        bestMatch = item;
      }
    }

    if (bestMatch && highestScore > 0) {
      return bestMatch;
    }

    // Default fallback when query is not recognized
    return {
      answer: `Thanks for asking! While I don't have that exact detail in my instant FAQ base yet, our engineering leads can answer it right away.\n\nYou can message us directly on WhatsApp (+91 8591903004) or drop us an inquiry on our Contact page!`,
      action: { label: 'Go to Contact Page', link: '/contact' },
      externalAction: { label: 'Chat on WhatsApp', url: 'https://wa.me/918591903004?text=Hi%20Fluxurious%20Tech%2C%20I%20have%20a%20question%3A%20' + encodeURIComponent(query) }
    };
  };

  const handleSendMessage = (textToSend) => {
    const query = (textToSend || inputValue).trim();
    if (!query) return;

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // Realistic typing latency (simulates bot thinking)
    setTimeout(() => {
      const match = findAnswer(query);
      const botMsg = {
        id: Date.now() + 1,
        sender: 'bot',
        text: match.answer,
        action: match.action,
        externalAction: match.externalAction,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 450);
  };

  const handlePillClick = (faqItem) => {
    handleSendMessage(faqItem.triggerPill);
  };

  const handleResetChat = () => {
    setMessages(INITIAL_MESSAGES);
  };

  return (
    <div className="fluxbot-root">
      {/* Floating Launcher Button */}
      <motion.button
        className={`fluxbot-launcher ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(prev => !prev)}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        aria-label="Toggle FluxBot Chat"
      >
        <div className="launcher-glow"></div>
        {isOpen ? (
          <X size={22} className="launcher-icon" />
        ) : (
          <>
            <Bot size={24} className="launcher-icon" />
            <span className="launcher-text">Ask FluxBot</span>
            {unreadPing && <span className="launcher-ping"></span>}
          </>
        )}
      </motion.button>

      {/* Chat Window Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fluxbot-modal"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 25, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            {/* Header */}
            <div className="fluxbot-header">
              <div className="header-bot-info">
                <div className="bot-avatar-frame">
                  <Bot size={20} className="bot-avatar-icon" />
                  <span className="avatar-online-dot"></span>
                </div>
                <div className="bot-title-group">
                  <div className="bot-name-row">
                    <h4>FluxBot</h4>
                    <span className="bot-pill-tag">AI Assistant</span>
                  </div>
                  <p className="bot-status-text">Fluxurious Tech • Instant Answers</p>
                </div>
              </div>

              <div className="header-actions">
                <button 
                  className="header-btn" 
                  onClick={handleResetChat} 
                  title="Reset Conversation"
                  aria-label="Reset Conversation"
                >
                  <RotateCcw size={15} />
                </button>
                <button 
                  className="header-btn" 
                  onClick={() => setIsOpen(false)} 
                  title="Close Chat"
                  aria-label="Close Chat"
                >
                  <X size={17} />
                </button>
              </div>
            </div>

            {/* Messages Thread */}
            <div className="fluxbot-messages">
              {messages.map((msg) => {
                const isBot = msg.sender === 'bot';
                return (
                  <div key={msg.id} className={`message-row ${isBot ? 'bot-row' : 'user-row'}`}>
                    {isBot && (
                      <div className="msg-bot-avatar">
                        <Bot size={14} />
                      </div>
                    )}
                    <div className={`message-bubble ${isBot ? 'bot-bubble' : 'user-bubble'}`}>
                      <div className="message-text">
                        {msg.text.split('\n').map((paragraph, pIdx) => {
                          if (!paragraph.trim()) return <br key={pIdx} />;
                          // Highlight bold strings like **text**
                          const parts = paragraph.split(/(\*\*.*?\*\*)/g);
                          return (
                            <p key={pIdx} className="message-paragraph">
                              {parts.map((part, partIdx) => {
                                if (part.startsWith('**') && part.endsWith('**')) {
                                  return <strong key={partIdx}>{part.slice(2, -2)}</strong>;
                                }
                                return part;
                              })}
                            </p>
                          );
                        })}
                      </div>

                      {/* Interactive Link or External Action */}
                      {msg.action && (
                        <div className="msg-action-box">
                          <Link 
                            to={msg.action.link} 
                            className="msg-action-link"
                            onClick={() => setIsOpen(false)}
                          >
                            <span>{msg.action.label}</span>
                            <ChevronRight size={14} />
                          </Link>
                        </div>
                      )}
                      {msg.externalAction && (
                        <div className="msg-action-box">
                          <a 
                            href={msg.externalAction.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="msg-action-link external"
                          >
                            <span>{msg.externalAction.label}</span>
                            <ArrowUpRight size={14} />
                          </a>
                        </div>
                      )}

                      <span className="message-timestamp">{msg.timestamp}</span>
                    </div>
                  </div>
                );
              })}

              {/* Typing Loader */}
              {isTyping && (
                <div className="message-row bot-row">
                  <div className="msg-bot-avatar">
                    <Bot size={14} />
                  </div>
                  <div className="message-bubble bot-bubble typing-bubble">
                    <div className="typing-dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestion Chips */}
            <div className="fluxbot-pills-bar">
              <span className="pills-label">Common FAQs:</span>
              <div className="pills-scroll-container">
                {FAQ_DATABASE.slice(0, 6).map((faq) => (
                  <button
                    key={faq.id}
                    type="button"
                    className="faq-pill-btn"
                    onClick={() => handlePillClick(faq)}
                  >
                    {faq.triggerPill}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Bar */}
            <form 
              className="fluxbot-input-form"
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
            >
              <input
                type="text"
                placeholder="Ask about sprints, pricing, tech stack..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="fluxbot-input"
              />
              <button 
                type="submit" 
                className="fluxbot-send-btn" 
                disabled={!inputValue.trim()}
                aria-label="Send message"
              >
                <Send size={15} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FluxBot;
