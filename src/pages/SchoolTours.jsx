import Hero from '../components/common/Hero';
import Section from '../components/common/Section';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import './SchoolTours.css';
import heroImg from '../assets/images/school-tours/hero.jpg';
import { SCHOOL_TOURS } from '../data/schoolTours';
import { SITE_INFO } from '../data/siteContent';

export default function SchoolTours() {
  return (
    <div className="school-tours-page">
      <Hero image={heroImg} title={SCHOOL_TOURS.hero.title} subtitle={SCHOOL_TOURS.hero.subtitle} />

      <Section title="Why Teach Students Permaculture?" background="cream-100">
        <div className="why-grid">
          {SCHOOL_TOURS.whyTeach.map((item, idx) => (
            <Card key={idx} title={item.title} className="why-card no-image">
              <p>{item.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section background="cream-50">
        <div className="target-badge">
          <span>Ages {SCHOOL_TOURS.targetAudience.minAge}–{SCHOOL_TOURS.targetAudience.maxAge}</span>
          <p>{SCHOOL_TOURS.targetAudience.description}</p>
        </div>
      </Section>

      <Section title="Sample Full-Day Itinerary" background="cream-100">
        <div className="itinerary">
          {SCHOOL_TOURS.itinerary.map((item, idx) => (
            <div key={idx} className="itinerary-item">
              <div className="itinerary-time">{item.time}</div>
              <div className="itinerary-activity">{item.activity}</div>
            </div>
          ))}
        </div>
        <div className="optional-addons">
          <p><strong>Optional Add-ons:</strong></p>
          <ul>
            {SCHOOL_TOURS.optionalAddOns.map((addon, idx) => (
              <li key={idx}>{addon}</li>
            ))}
          </ul>
        </div>
      </Section>

      <Section title="Pricing" background="cream-50">
        <div className="pricing-grid">
          {SCHOOL_TOURS.pricing.map((option, idx) => (
            <Card key={idx} title={option.type} className="pricing-card no-image">
              <div className="price">{option.price}</div>
              <p>{option.description}</p>
            </Card>
          ))}
        </div>
        <p className="pricing-note">{SCHOOL_TOURS.teacherPolicy}</p>
      </Section>

      <Section title="Location & Access" background="cream-100">
        <div className="location-content">
          <div className="location-info">
            <h3>{SCHOOL_TOURS.location.name}</h3>
            <p>{SCHOOL_TOURS.location.area}</p>
            <ul className="location-details">
              <li>🚗 {SCHOOL_TOURS.location.driveTime}</li>
              <li>🚂 {SCHOOL_TOURS.location.trainAccess}</li>
            </ul>
            <Button href={SCHOOL_TOURS.location.mapsLink} variant="secondary" size="md">
              View on Google Maps
            </Button>
          </div>
        </div>
      </Section>

      <Section background="forest-900">
        <div className="cta-content">
          <h3>Ready to Book Your School Tour?</h3>
          <p>Contact us to schedule your visit and customize the itinerary for your group.</p>
          <Button href={`tel:${SITE_INFO.phone}`} variant="primary" size="lg">
            Call {SITE_INFO.phone}
          </Button>
        </div>
      </Section>
    </div>
  );
}
