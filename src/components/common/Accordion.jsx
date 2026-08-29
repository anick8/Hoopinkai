import { useState } from 'react';
import './Accordion.css';

export default function Accordion({ items, className = '' }) {
  const [open, setOpen] = useState(null);

  const toggle = (id) => {
    setOpen(open === id ? null : id);
  };

  return (
    <div className={`accordion ${className}`}>
      {items.map((item) => (
        <div key={item.id} className="accordion-item">
          <button
            className={`accordion-trigger ${open === item.id ? 'active' : ''}`}
            onClick={() => toggle(item.id)}
            aria-expanded={open === item.id}
            aria-controls={`accordion-panel-${item.id}`}
          >
            <span className="accordion-title">{item.question}</span>
            <svg className="accordion-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          <div
            id={`accordion-panel-${item.id}`}
            className={`accordion-panel ${open === item.id ? 'active' : ''}`}
            role="region"
          >
            <div className="accordion-content">
              <p>{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
