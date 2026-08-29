import { useState } from 'react';
import Button from './Button';
import './SignupForm.css';
import { SITE_INFO } from '../../data/siteContent';

export default function SignupForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create mailto link with form data
    const subject = 'Hoopinkai Support Circles Inquiry';
    const body = `Hi Yamini,\n\nI'm interested in the support circles.\n\nName: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\n\n${formData.message}`;
    const mailtoLink = `mailto:${SITE_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="form-success">
        <p className="form-success-message">
          Thank you! Your inquiry has been sent. We'll get back to you shortly.
        </p>
        <p className="form-alternate">
          Alternatively, reach out directly:<br />
          <a href={`tel:${SITE_INFO.phone}`}>{SITE_INFO.phone}</a> or{' '}
          <a href={`https://wa.me/919970256379`}>WhatsApp</a>
        </p>
      </div>
    );
  }

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="firstName" className="form-label">
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
          className="form-input"
          placeholder="Your first name"
        />
      </div>

      <div className="form-group">
        <label htmlFor="lastName" className="form-label">
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
          className="form-input"
          placeholder="Your last name"
        />
      </div>

      <div className="form-group">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="form-input"
          placeholder="your@email.com"
        />
      </div>

      <div className="form-group">
        <label htmlFor="message" className="form-label">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="form-input form-textarea"
          placeholder="Briefly let us know what you're looking for in the circles..."
          rows="5"
        ></textarea>
      </div>

      <div className="form-actions">
        <Button type="submit" variant="primary" size="lg">
          Send Inquiry
        </Button>
        <p className="form-note">Or call us directly: <a href={`tel:${SITE_INFO.phone}`}>{SITE_INFO.phone}</a></p>
      </div>
    </form>
  );
}
