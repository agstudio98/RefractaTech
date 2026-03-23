export function Timeline() {
  const events = [
    { year: '2025', title: 'El Comienzo', desc: 'Fundación de RefractaTech. Primera sucursal operativa con foco en repuestos y accesorios.' },
    { year: '2026', title: 'Expansión de Servicios', desc: 'Lanzamiento del servicio técnico especializado para PCs y Celulares con repuestos originales.' },
    { year: '2027', title: 'Red de Sucursales', desc: 'Apertura de nuevas sedes en puntos estratégicos, consolidando la cadena nacional.' },
    { year: '2028', title: 'Innovación Digital', desc: 'Implementación de soporte mediante IA y catálogo interactivo para una experiencia premium.' },
  ];

  return (
    <div className="timeline-section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '2.5rem' }}>Nuestra Trayectoria</h2>
          <p>Creciendo junto a la tecnología desde 2025.</p>
        </div>

        <div className="timeline-container">
          <div className="timeline-line" />
          {events.map((e, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <span className="timeline-year">{e.year}</span>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{e.title}</h3>
                <p style={{ margin: 0, fontSize: '0.95rem' }}>{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
