interface ProductFilterProps {
  onFilterChange: (category: string) => void;
  activeFilter: string;
}

export function ProductFilter({ onFilterChange, activeFilter }: ProductFilterProps) {
  const categories = [
    { name: 'Todos', sub: [] },
    { name: 'Computación', sub: ['Laptops', 'PCs Armadas', 'Componentes'] },
    { name: 'Mobile', sub: ['Celulares', 'Tablets', 'Repuestos'] },
    { name: 'Accesorios', sub: ['Periféricos', 'Audio', 'Cables'] },
    { name: 'Servicios', sub: ['Mantenimiento', 'Reparación'] }
  ];

  return (
    <div className="container" style={{ marginBottom: '3rem' }}>
      <div className="glass-card" style={{ padding: '2rem' }}>
        <h3 style={{ fontSize: '1.2rem', marginBottom: '1.5rem' }}>Explorar Categorías</h3>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {categories.map((cat) => (
            <div key={cat.name} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <button
                onClick={() => onFilterChange(cat.name)}
                style={{
                  padding: '0.6rem 1.2rem',
                  borderRadius: '12px',
                  border: 'none',
                  background: activeFilter === cat.name ? 'var(--text)' : 'rgba(0,0,0,0.05)',
                  color: activeFilter === cat.name ? 'white' : 'var(--text)',
                  fontWeight: '600',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  transition: 'all 0.2s'
                }}
              >
                {cat.name}
              </button>
              {cat.sub.length > 0 && activeFilter === cat.name && (
                <div style={{ display: 'flex', gap: '0.5rem', paddingLeft: '0.5rem' }}>
                  {cat.sub.map(sub => (
                    <span key={sub} style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', cursor: 'pointer' }} onClick={() => onFilterChange(sub)}>
                      • {sub}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
