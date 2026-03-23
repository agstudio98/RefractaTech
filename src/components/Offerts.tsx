const offers = [
  { name: 'PC Gamer RTX 4060', price: '$1,199', original: '$1,499', img: 'https://images.unsplash.com/photo-1603302576837-37561ab7a3c5?auto=format&fit=crop&w=600&q=80', category: 'PCs' },
  { name: 'iPhone 16 Pro', price: '$999', original: '$1,199', img: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&w=600&q=80', category: 'Celulares' },
  { name: 'Monitor 4K 144Hz', price: '$449', original: '$599', img: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=600&q=80', category: 'Accesorios' },
];

export function Offerts() {
  return (
    <div className="container">
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <span style={{ color: 'var(--accent)', fontWeight: '700', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Destacados</span>
        <h2 style={{ marginTop: '0.5rem' }}>Ofertas de Temporada</h2>
      </div>

      <div className="grid-cols-3">
        {offers.map((offer, i) => (
          <div key={i} className="glass-card fade-in" style={{ padding: '1.5rem', position: 'relative' }}>
            <div style={{ 
              position: 'absolute', 
              top: '1rem', 
              right: '1rem', 
              background: 'var(--orange)', 
              color: 'white', 
              padding: '0.3rem 0.8rem', 
              borderRadius: '20px', 
              fontSize: '0.8rem', 
              fontWeight: '700',
              zIndex: 2
            }}>
              OFERTA
            </div>
            <div style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: '1rem', aspectRatio: '1/1' }}>
              <img src={offer.img} alt={offer.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{offer.name}</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--text)' }}>{offer.price}</span>
              <span style={{ fontSize: '0.9rem', textDecoration: 'line-through', color: 'var(--text-secondary)' }}>{offer.original}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
