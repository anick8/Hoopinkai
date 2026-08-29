import { Link } from 'react-router-dom';
import Hero from '../components/common/Hero';
import Section from '../components/common/Section';
import Button from '../components/common/Button';
import './NotFound.css';
import heroImg from '../assets/images/home/hero.jpg';

export default function NotFound() {
  return (
    <div className="not-found-page">
      <Hero image={heroImg} title="404" subtitle="Page Not Found" />

      <Section background="cream-100">
        <div className="not-found-content">
          <p>Sorry, we couldn't find the page you're looking for.</p>
          <Button to="/" variant="primary" size="lg">
            Back to Home
          </Button>
        </div>
      </Section>
    </div>
  );
}
