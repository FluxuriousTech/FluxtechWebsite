import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactUsComponent from '../components/ContactUs';
import SEOHead from '../components/SEOHead';

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Fluxurious Tech",
  "description": "Custom digital products & MVP studio. Web development, mobile apps, UI/UX design.",
  "url": "https://www.fluxurioustech.com",
  "telephone": "+91-8591903004",
  "email": "fluxurioustech@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Thane",
    "addressRegion": "Maharashtra",
    "postalCode": "400601",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "19.2183",
    "longitude": "72.9781"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    "opens": "09:00",
    "closes": "21:00"
  },
  "priceRange": "$$",
  "image": "https://www.fluxurioustech.com/og-image.jpg",
  "sameAs": []
};

const ContactUs = () => {
  return (
    <main>
      <SEOHead
        title="Contact Us — Start Your Project"
        description="Get in touch with Fluxurious Tech for your next web or mobile app project. Direct founder access, rapid response via WhatsApp or email. Mumbai, India."
        canonicalPath="/contact"
        structuredData={localBusinessSchema}
      />
      <Navbar />
      <ContactUsComponent />
      <Footer />
    </main>
  );
};

export default ContactUs;
