import Hero from '../components/common/Hero';
import Section from '../components/common/Section';
import Button from '../components/common/Button';
import { InstagramLogo, WhatsappLogo } from '@phosphor-icons/react';
import './Events.css';
import heroImg from '../assets/images/home/hero.jpg';
import { SITE_INFO } from '../data/siteContent';

export default function UpcomingEvents() {
  return (
    <div className="events-page">
      <Hero image={heroImg} title="Upcoming Events" subtitle="Coming Soon" />

      <Section background="cream-100" className="events-content">
        <div className="events-message">
          <p>We're planning exciting events for the near future! Stay tuned for announcements.</p>
          <div className="events-cta">
            <p>Follow us for updates:</p>
            <div className="social-links">
              <a
                href={SITE_INFO.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon instagram-icon"
                aria-label="Follow us on Instagram"
              >
                <InstagramLogo size={40} weight="fill" />
              </a>
              <a
                href={SITE_INFO.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon whatsapp-icon"
                aria-label="Contact us on WhatsApp"
              >
                <WhatsappLogo size={40} weight="fill" />
              </a>
            </div>
          </div>
          <p className="or-text">or</p>
          <Button to="/past-events" variant="primary" size="md">
            See Past Events
          </Button>
        </div>
      </Section>
    </div>
  );
}
