import './Section.css';

export default function Section({
  title,
  subtitle,
  children,
  background = 'cream-100',
  className = '',
}) {
  return (
    <section className={`section section-${background} ${className}`}>
      <div className="section-content container">
        {title && (
          <div className="section-header">
            <h2 className="section-title">{title}</h2>
            {subtitle && <p className="section-subtitle">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
