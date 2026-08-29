import './Hero.css';

export default function Hero({ image, title, subtitle, children, className = '' }) {
  return (
    <div
      className={`hero ${className}`}
      style={{
        backgroundImage: `linear-gradient(rgba(27, 58, 43, 0.55), rgba(27, 58, 43, 0.75)), url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="hero-content">
        {title && <h1 className="hero-title">{title}</h1>}
        {subtitle && <p className="hero-subtitle">{subtitle}</p>}
        {children}
      </div>
    </div>
  );
}
