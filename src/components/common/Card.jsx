import './Card.css';

export default function Card({
  image,
  title,
  subtitle,
  children,
  className = '',
  onClick = null,
}) {
  return (
    <div className={`card ${className}`} onClick={onClick} role={onClick ? 'button' : undefined}>
      {image && (
        <div className="card-image-wrapper">
          <img src={image} alt={title || 'Card image'} className="card-image" />
        </div>
      )}
      <div className="card-content">
        {title && <h3 className="card-title">{title}</h3>}
        {subtitle && <p className="card-subtitle">{subtitle}</p>}
        {children}
      </div>
    </div>
  );
}
