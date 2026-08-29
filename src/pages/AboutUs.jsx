import Hero from '../components/common/Hero';
import Section from '../components/common/Section';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import './AboutUs.css';
import heroImg from '../assets/images/about/hero-aerial.jpg';
import founderImg from '../assets/images/about/founder-portrait.jpg';
import { SITE_INFO } from '../data/siteContent';

export default function AboutUs() {
  const features = [
    { title: 'Farm Stays', description: 'Rustic cottages with Wi-Fi on 100+ acres' },
    { title: 'Yoga Retreats', description: 'Movement and mindfulness in nature' },
    { title: 'Organic Farming', description: 'Learn sustainable practices' },
    { title: 'Nature Walks', description: 'Explore biodiversity and landscapes' },
  ];

  return (
    <div className="about-page">
      <Hero image={heroImg} title="Our Story" />

      <Section title="About Hoopinkai" background="cream-100">
        <div className="about-grid">
          <div className="about-image-wrapper">
            <img src={founderImg} alt="Yamini Gowda" className="about-founder-image" />
          </div>
          <div className="about-content">
            <p>
              Hoopinkai is a trendy and innovative sustainable farm retreat located 1.5 hours from Bangalore, India, hosted at DeeMandala Farms.
            </p>
            <p>
              Our mission is to create spaces where people can reconnect with nature, themselves, and each other. We offer a diverse range of experiences including farm stays, yoga retreats, organic farming activities, nature walks, and sustainable living workshops.
            </p>
            <p>
              With over 100 acres of pristine land, rustic cottages equipped with Wi-Fi, and locally-sourced meals, we provide the perfect setting for rest, renewal, and growth.
            </p>
          </div>
        </div>
      </Section>

      <Section title="What We Offer" background="cream-50">
        <div className="features-grid">
          {features.map((feature, idx) => (
            <Card key={idx} title={feature.title} className="feature-card no-image">
              <p>{feature.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section background="forest-900" className="cta-section">
        <div className="cta-content">
          <h3>Ready to Experience Hoopinkai?</h3>
          <p>Get in touch with us to plan your retreat.</p>
          <div className="cta-buttons">
            <Button href={`tel:${SITE_INFO.phone}`} variant="primary" size="lg">
              Call {SITE_INFO.phone}
            </Button>
            <Button href={`https://wa.me/919970256379`} variant="secondary" size="lg">
              WhatsApp
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
