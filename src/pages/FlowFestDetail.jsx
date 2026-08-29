import { useParams, Link } from 'react-router-dom';
import Hero from '../components/common/Hero';
import Section from '../components/common/Section';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { PAST_EVENTS } from '../data/pastEvents';
import './FlowFestDetail.css';
import heroImg from '../assets/images/flow-fest/hero.jpg';
import { SITE_INFO } from '../data/siteContent';
import yaminiImg from '../assets/images/flow-fest/facilitator-yamini.jpg';
import aditiImg from '../assets/images/flow-fest/facilitator-aditi.jpg';
import raviImg from '../assets/images/flow-fest/facilitator-ravi.jpg';
import anchanaImg from '../assets/images/flow-fest/facilitator-anchana.jpg';
import ranjitImg from '../assets/images/flow-fest/facilitator-ranjit.jpeg';
import ashritaImg from '../assets/images/flow-fest/facilitator-ashrita.jpg';

export default function FlowFestDetail() {
  const { slug } = useParams();
  const event = PAST_EVENTS.find((e) => e.slug === slug);

  if (!event) {
    return (
      <div className="flowfest-page">
        <Section background="cream-100">
          <p style={{ textAlign: 'center' }}>Event not found. <Link to="/past-events">Back to Events</Link></p>
        </Section>
      </div>
    );
  }

  return (
    <div className="flowfest-page">
      <Hero image={heroImg} title={event.title} subtitle={event.theme} />

      {event.description && (
        <Section background="cream-100">
          <p className="event-description">{event.description}</p>
        </Section>
      )}

      {event.itinerary && (
        <Section title="4-Day Itinerary" background="cream-50">
          <div className="itinerary-grid">
            {event.itinerary.map((day) => (
              <Card key={day.day} title={`Day ${day.day}`} className="itinerary-card no-image">
                <p className="day-title">{day.title}</p>
                <ul>
                  {day.activities.map((activity, idx) => (
                    <li key={idx}>{activity}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Section>
      )}

      {event.facilitators && (
        <Section title="Our Facilitators" background="cream-100">
          <div className="facilitators-grid">
            {event.facilitators.map((facilitator, idx) => {
              const imageMap = {
                'facilitator-yamini.jpg': yaminiImg,
                'facilitator-aditi.jpg': aditiImg,
                'facilitator-ravi.jpg': raviImg,
                'facilitator-anchana.jpg': anchanaImg,
                'facilitator-ranjit.jpeg': ranjitImg,
                'facilitator-ashrita.jpg': ashritaImg,
              };
              return (
                <Card key={idx} image={imageMap[facilitator.image]} title={facilitator.name} className="facilitator-card">
                  <p className="facilitator-specialty">{facilitator.specialty}</p>
                </Card>
              );
            })}
          </div>
        </Section>
      )}

      {event.venue && (
        <Section title="Venue" background="cream-50">
          <div className="venue-content">
            <h3>{event.venue.name}</h3>
            <p>{event.venue.location} • {event.venue.distance}</p>
            <ul>
              {event.venue.highlights.map((highlight, idx) => (
                <li key={idx}>{highlight}</li>
              ))}
            </ul>
          </div>
        </Section>
      )}

      {event.pricing && (
        <Section title="Pricing" background="cream-100">
          <div className="pricing-table">
            {event.pricing.map((option, idx) => (
              <div key={idx} className="pricing-row">
                <span className="pricing-type">{option.type}</span>
                <span className="pricing-status">{option.status}</span>
              </div>
            ))}
          </div>
          {event.note && <p className="pricing-note">{event.note}</p>}
        </Section>
      )}

      <Section background="forest-900">
        <div className="registration-closed">
          <p>{event.status}</p>
          <p className="contact-text">For inquiries, contact us:</p>
          <Button href={`tel:${SITE_INFO.phone}`} variant="primary" size="md">
            {SITE_INFO.phone}
          </Button>
        </div>
      </Section>
    </div>
  );
}
