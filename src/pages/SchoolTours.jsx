'use client';

import { useState } from 'react';
import Hero from '../components/common/Hero';
import Section from '../components/common/Section';
import Button from '../components/common/Button';
import './SchoolTours.css';
import heroImg from '../assets/images/school-tours/hero.jpg';
import { SCHOOL_TOURS } from '../data/schoolTours';
import { SITE_INFO } from '../data/siteContent';

export default function SchoolTours() {
  const [expandedItinerary, setExpandedItinerary] = useState(null);

  return (
    <div className="school-tours-page">
      <Hero image={heroImg} title={SCHOOL_TOURS.hero.title} subtitle={SCHOOL_TOURS.hero.subtitle} />

      {/* Why Teach Section - Asymmetric Zig-Zag Grid */}
      <Section background="cream-100">
        <div className="why-section">
          <div className="why-header">
            <h2 className="why-title">Why Teach Students Permaculture?</h2>
            <p className="why-subtitle">Build ecological consciousness through direct experience</p>
          </div>
          <div className="why-grid-asymmetric">
            {SCHOOL_TOURS.whyTeach.map((item, idx) => (
              <div key={idx} className={`why-card-premium why-card-${idx}`}>
                <div className="why-card-index">{String(idx + 1).padStart(2, '0')}</div>
                <div className="why-card-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Target Audience - Enhanced Badge */}
      <Section background="cream-50">
        <div className="target-section">
          <div className="target-badge-premium">
            <div className="badge-number">{SCHOOL_TOURS.targetAudience.minAge}–{SCHOOL_TOURS.targetAudience.maxAge}</div>
            <div className="badge-label">Years Old</div>
            <div className="badge-description">{SCHOOL_TOURS.targetAudience.description}</div>
          </div>
        </div>
      </Section>

      {/* Interactive Itinerary */}
      <Section background="cream-100">
        <div className="itinerary-section">
          <div className="itinerary-header">
            <h2>Full-Day Experience</h2>
            <p>A carefully curated journey through nature, learning, and community</p>
          </div>
          <div className="itinerary-premium">
            {SCHOOL_TOURS.itinerary.map((item, idx) => (
              <div
                key={idx}
                className={`itinerary-card ${expandedItinerary === idx ? 'expanded' : ''}`}
                onClick={() => setExpandedItinerary(expandedItinerary === idx ? null : idx)}
              >
                <div className="itinerary-card-inner">
                  <div className="itinerary-card-time">{item.time}</div>
                  <div className="itinerary-card-activity">{item.activity}</div>
                  <div className="itinerary-card-expand-icon">→</div>
                </div>
              </div>
            ))}
          </div>

          {/* Optional Add-ons */}
          <div className="optional-addons-premium">
            <h3>Optional Enhancements</h3>
            <div className="addons-list">
              {SCHOOL_TOURS.optionalAddOns.map((addon, idx) => (
                <div key={idx} className="addon-item">
                  <span className="addon-icon">+</span>
                  <span>{addon}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Pricing Cards - Premium Grid */}
      <Section background="cream-50">
        <div className="pricing-section">
          <div className="pricing-header">
            <h2>Transparent Pricing</h2>
            <p>All meals, activities, and experienced facilitators included</p>
          </div>
          <div className="pricing-grid-premium">
            {SCHOOL_TOURS.pricing.map((option, idx) => (
              <div key={idx} className="pricing-card-premium">
                <div className="pricing-card-header">
                  <div className="pricing-type">{option.type}</div>
                  <div className="pricing-badge">{option.type === 'Vegetarian' ? 'V' : 'NV'}</div>
                </div>
                <div className="pricing-price">{option.price}</div>
                <div className="pricing-description">{option.description}</div>
                <div className="pricing-footnote">{SCHOOL_TOURS.teacherPolicy}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Location & Access - Split Layout */}
      <Section background="cream-100">
        <div className="location-section">
          <div className="location-split">
            <div className="location-info-premium">
              <h2>{SCHOOL_TOURS.location.name}</h2>
              <p className="location-area">{SCHOOL_TOURS.location.area}</p>

              <div className="access-info">
                <div className="access-item">
                  <div className="access-icon">DRIVE</div>
                  <div className="access-detail">
                    <p className="access-time">{SCHOOL_TOURS.location.driveTime}</p>
                  </div>
                </div>
                <div className="access-item">
                  <div className="access-icon">TRAIN</div>
                  <div className="access-detail">
                    <p className="access-time">{SCHOOL_TOURS.location.trainAccess}</p>
                  </div>
                </div>
              </div>

              <Button href={SCHOOL_TOURS.location.mapsLink} variant="secondary" size="md" className="map-button">
                View on Google Maps
              </Button>
            </div>

            <div className="location-visual">
              <div className="location-stat">
                <div className="stat-number">100</div>
                <div className="stat-label">Acres of Permaculture</div>
              </div>
              <div className="location-stat">
                <div className="stat-number">30+</div>
                <div className="stat-label">Years Operating</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="forest-900">
        <div className="cta-section">
          <h2>Ready to Bring Your Students?</h2>
          <p>Schedule your visit and customize the experience for your group</p>
          <Button href={`tel:${SITE_INFO.phone}`} variant="primary" size="lg">
            Call {SITE_INFO.phone}
          </Button>
        </div>
      </Section>
    </div>
  );
}
