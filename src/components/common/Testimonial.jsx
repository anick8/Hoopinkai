import './Testimonial.css';

export default function Testimonial({ quote, author, role, image }) {
  return (
    <div className="testimonial">
      <div className="testimonial-container">
        <div className="testimonial-quote-mark">"</div>
        <p className="testimonial-text">{quote}</p>
        <div className="testimonial-author">
          {image && <img src={image} alt={author} className="testimonial-image" />}
          <div>
            <p className="testimonial-name">{author}</p>
            {role && <p className="testimonial-role">{role}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
