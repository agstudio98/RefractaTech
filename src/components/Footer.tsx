export function Footer() {
  const services = [
    'Mantenimiento de PCs',
    'Reparación de Celulares',
    'Repuestos Originales',
    'Venta de Productos Tech',
  ];

  const contact = [
    { label: 'Email', value: 'info@refractatech.com' },
    { label: 'Teléfono', value: '+54 11 1234-5678' },
    { label: 'Sede', value: 'Tech City, Argentina' },
  ];

  const socials = [
    { name: 'Instagram', href: '#' },
    { name: 'LinkedIn', href: '#' },
    { name: 'X', href: '#' },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          {/* Brand column */}
          <div>
            <div style={{ 
              fontFamily: 'var(--font-heading)', 
              fontSize: '1.5rem', 
              fontWeight: '800', 
              marginBottom: '1.5rem',
              background: 'var(--gradient)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              RefractaTech
            </div>
            <p style={{ maxWidth: '300px' }}>
              Soluciones tecnológicas de alta precisión. Liderando la industria con innovación y calidad desde 2025.
            </p>
            <div className="footer-socials">
              {socials.map((s) => (
                <a key={s.name} href={s.href} className="footer-social-link">
                  {s.name}
                </a>
              ))}
            </div>
          </div>

          {/* Services column */}
          <div>
            <h4>Servicios</h4>
            <ul className="footer-list">
              {services.map((s) => (
                <li key={s} className="footer-list-item">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h4>Contacto</h4>
            <ul className="footer-list">
              {contact.map((c) => (
                <li key={c.label} className="footer-contact-item">
                  <span className="footer-contact-label">{c.label}</span>
                  <span style={{ color: '#86868b' }}>{c.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>&copy; 2026 RefractaTech.</span>
          <span style={{ color: '#424245' }}>Diseñado para la eficiencia.</span>
        </div>
      </div>
    </footer>
  );
}
