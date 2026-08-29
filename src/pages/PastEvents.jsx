import { Link } from 'react-router-dom';
import Hero from '../components/common/Hero';
import Section from '../components/common/Section';
import Card from '../components/common/Card';
import { PAST_EVENTS } from '../data/pastEvents';
import './PastEvents.css';
import heroImg from '../assets/images/flow-fest/hero.jpg';

export default function PastEvents() {
  return (
    <div className="past-events-page">
      <Hero image={heroImg} title="Past Events" subtitle="Flow Fest Archives" />

      <Section title="Flow Fest Events" background="cream-100">
        <div className="events-grid">
          {PAST_EVENTS.map((event) => (
            <Link key={event.slug} to={`/past-events/${event.slug}`} className="event-card-link">
              <Card className="event-card no-image">
                <h3>{event.edition}</h3>
                <p className="event-title">{event.title}</p>
                <p className="event-theme">{event.theme}</p>
                <p className="event-status">{event.status}</p>
              </Card>
            </Link>
          ))}
        </div>
      </Section>
    </div>
  );
}
