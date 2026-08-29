import Hero from '../components/common/Hero';
import Section from '../components/common/Section';
import Card from '../components/common/Card';
import Accordion from '../components/common/Accordion';
import Testimonial from '../components/common/Testimonial';
import SignupForm from '../components/common/SignupForm';
import Button from '../components/common/Button';
import CircleCard from '../components/home/CircleCard';
import FacilitatorBio from '../components/home/FacilitatorBio';
import { SUPPORT_CIRCLES } from '../data/circles';
import { CIRCLE_AGREEMENTS } from '../data/agreements';
import { FAQ } from '../data/faq';
import heroImg from '../assets/images/home/hero.jpg';
import testimonialImg from '../assets/images/home/testimonial-portrait.png';
import creativeCareersImg from '../assets/images/home/creative-careers-circle.jpeg';
import transitionsImg from '../assets/images/home/transitions-circle.jpg';
import facilitatorImg from '../assets/images/home/facilitator-portrait.jpg';
import './Home.css';

export default function Home() {
  return (
    <div className="home-page">
      <Hero image={heroImg} title="SUPPORT CIRCLES" subtitle="Reclaiming the spaces we want to be in" />

      <Section title="What Are Support Circles?" background="cream-50">
        <p className="intro-text">{SUPPORT_CIRCLES.intro}</p>
        <p className="session-note">Next sessions start <strong>{SUPPORT_CIRCLES.sessionStart}</strong></p>
      </Section>

      <Section title="Our Two Circles" background="cream-100">
        <div className="circles-grid">
          <CircleCard
            name={SUPPORT_CIRCLES.circles[0].name}
            schedule={SUPPORT_CIRCLES.circles[0].schedule}
            description={SUPPORT_CIRCLES.circles[0].description}
            topics={SUPPORT_CIRCLES.circles[0].topics}
            image={creativeCareersImg}
          />
          <CircleCard
            name={SUPPORT_CIRCLES.circles[1].name}
            schedule={SUPPORT_CIRCLES.circles[1].schedule}
            description={SUPPORT_CIRCLES.circles[1].description}
            topics={SUPPORT_CIRCLES.circles[1].topics}
            image={transitionsImg}
          />
        </div>
      </Section>

      <Section
        title="Meet Your Facilitator"
        background="cream-50"
        className="facilitator-section"
      >
        <FacilitatorBio
          name={SUPPORT_CIRCLES.facilitator.name}
          role={SUPPORT_CIRCLES.facilitator.role}
          bio={SUPPORT_CIRCLES.facilitator.bio}
          quote={SUPPORT_CIRCLES.facilitator.quote}
          image={facilitatorImg}
        />
      </Section>

      <Section background="forest-900" className="disclaimer-section">
        <div className="disclaimer-content">
          <p className="disclaimer-icon">⚠️</p>
          <p className="disclaimer-text">{SUPPORT_CIRCLES.disclaimer}</p>
        </div>
      </Section>

      <Section title="Is This For You?" background="cream-100">
        <div className="eligibility-grid">
          <div className="eligibility-column">
            <h3>This might be for you if:</h3>
            <ul className="eligibility-list">
              {SUPPORT_CIRCLES.eligibility.forYou.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="eligibility-column">
            <h3>This might not be for you if:</h3>
            <ul className="eligibility-list not-for-you">
              {SUPPORT_CIRCLES.eligibility.notForYou.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section title="Circle Agreements" background="cream-50">
        <p className="agreement-intro">
          All members commit to these nine agreements to create a safe, trusted space:
        </p>
        <div className="agreements-grid">
          {CIRCLE_AGREEMENTS.map((agreement) => (
            <Card key={agreement.id} title={agreement.title} className="agreement-card no-image">
              <p>{agreement.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Frequently Asked Questions" background="cream-100">
        <Accordion items={FAQ} />
      </Section>

      <Testimonial
        quote="If I share something, she's able to help me think from a space of deeper compassion for myself, which I often find hard to access."
        author="Rachika Komal"
        role="Psychologist"
        image={testimonialImg}
      />

      <Section title="Ready to Join a Circle?" background="cream-100">
        <SignupForm />
      </Section>
    </div>
  );
}
