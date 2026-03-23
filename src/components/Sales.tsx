export function Sales() {
  const promos = [
    { title: 'Mantenimiento PC', desc: 'Limpieza profunda y cambio de pasta térmica al 20% OFF.', color: '#FFD700' },
    { title: 'Reparación Express', desc: 'Arreglamos tu pantalla de celular en menos de 2 horas.', color: '#FF8C00' },
  ];

  return (
    <div className="container">
      <div className="grid-cols-2" style={{ gap: '2rem' }}>
        {promos.map((p, i) => (
          <div key={i} className="glass-card fade-in" style={{ 
            padding: '2.5rem', 
            background: `linear-gradient(135deg, white 60%, ${p.color}22 100%)`,
            borderLeft: `5px solid ${p.color}`
          }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{p.title}</h3>
            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>{p.desc}</p>
            <button style={{ 
              padding: '0.8rem 1.5rem', 
              borderRadius: '12px', 
              border: 'none', 
              background: 'var(--text)', 
              color: 'white', 
              fontWeight: '600',
              cursor: 'pointer'
            }}>
              Más Información
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
