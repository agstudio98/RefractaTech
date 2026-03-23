export function Story() {
  const timeline = [
    { year: '2025', title: 'Fundación', desc: 'Lanzamiento de la primera sucursal RefractaTech con foco en reparaciones premium', side: 'left' },
    { year: '2026', title: 'Expansión', desc: 'Apertura de 3 sucursales + servicios avanzados de mantenimiento PC/celular', side: 'right' },
    { year: '2027', title: 'Accesorios', desc: 'Lanzamiento exclusiva línea de accesorios gaming y celulares high-end', side: 'left' },
    { year: '2028', title: 'Red Nacional', desc: 'Expansión nacional con reparaciones express 24/7 y tienda online', side: 'right' },
  ];

  return (
    <section className="story-section" style={{ background: 'var(--glass-bg)', padding: '6rem 2rem' }}>
      <h2 className="animate-slideInLeft" style={{ color: 'var(--text-h)', marginBottom: '3rem' }}>Nuestra Historia</h2>
      <div className="timeline-container glass-card" style={{ 
        maxWidth: '1000px', margin: '0 auto', position: 'relative', padding: '3rem' 
      }}>
        <div className="timeline-line"></div>
        {timeline.map((event, index) => (
          <div 
            key={event.year} 
            className={`timeline-item glass-card animate-${event.side === 'left' ? 'slideInLeft' : 'slideInRight'}`}
            style={{ 
              display: 'flex', marginBottom: '3rem', position: 'relative', 
              animationDelay: `${index * 0.3}s`
            }}
          >
            <div style={{ 
              minWidth: '80px', textAlign: 'center', fontWeight: 'bold', 
              color: 'var(--accent)', fontSize: '1.4rem', fontFamily: 'var(--logo-font)'
            }}>
              {event.year}
            </div>
            <div style={{ 
              flex: 1, padding: '1.5rem 2rem', marginLeft: '2rem', 
              borderLeft: event.side === 'right' ? '3px solid transparent' : 'none'
            }}>
              <h3>{event.title}</h3>
              <p>{event.desc}</p>
            </div>
            <img 
              src={event.side === 'left' 
                ? 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80' 
                : 'https://images.unsplash.com/photo-1558618047-3c8c76ffe9e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
              } 
              alt={`${event.year} Milestone`}
              style={{
                width: '200px', height: '150px', objectFit: 'cover', borderRadius: '16px',
                marginLeft: '2rem', boxShadow: 'var(--shadow)'
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

