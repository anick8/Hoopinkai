import './FacilitatorBio.css';

export default function FacilitatorBio({ name, role, bio, quote, image }) {
  return (
    <div className="facilitator-bio">
      <div className="facilitator-grid">
        <div className="facilitator-image-wrapper">
          <img src={image} alt={name} className="facilitator-image" />
        </div>
        <div className="facilitator-content">
          <h3 className="facilitator-name">{name}</h3>
          <p className="facilitator-role">{role}</p>
          <p className="facilitator-description">{bio}</p>
          <blockquote className="facilitator-quote">
            <p>"{quote}"</p>
          </blockquote>
        </div>
      </div>
    </div>
  );
}
