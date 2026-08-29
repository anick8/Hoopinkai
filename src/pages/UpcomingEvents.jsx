import Hero from '../components/common/Hero';
import Section from '../components/common/Section';
import Button from '../components/common/Button';
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
              <Button
                href={SITE_INFO.socials.instagram}
                variant="secondary"
                size="md"
              >
                Instagram
              </Button>
              <Button
                href={`https://wa.me/919970256379`}
                variant="secondary"
                size="md"
              >
                WhatsApp
              </Button>
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
