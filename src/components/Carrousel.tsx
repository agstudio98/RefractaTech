import { useState, useEffect } from 'react';

const slides = [
  { img: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=1200&q=80', title: 'Nueva Serie Gaming', subtitle: 'Poder absoluto en tus manos' },
  { img: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=1200&q=80', title: 'Accesorios Premium', subtitle: 'Diseñados para durar' },
  { img: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=1200&q=80', title: 'Servicio Técnico', subtitle: 'Expertos a tu disposición' },
];

export function Carrousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="container">
      <div className="glass-card" style={{ 
        position: 'relative', 
        height: '450px', 
        overflow: 'hidden',
        borderRadius: '32px',
        padding: 0
      }}>
        {slides.map((s, i) => (
          <div key={i} style={{ 
            position: 'absolute', 
            inset: 0, 
            opacity: i === current ? 1 : 0, 
            transition: 'opacity 1s ease-in-out',
            zIndex: i === current ? 1 : 0
          }}>
            <img src={s.img} alt={s.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ 
              position: 'absolute', 
              inset: 0, 
              background: 'linear-gradient(90deg, rgba(0,0,0,0.8) 0%, transparent 60%)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '0 4rem'
            }}>
              <h2 style={{ color: 'white', fontSize: '3rem', marginBottom: '0.5rem' }}>{s.title}</h2>
              <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.25rem' }}>{s.subtitle}</p>
            </div>
          </div>
        ))}
        
        <div style={{ position: 'absolute', bottom: '1.5rem', left: '4rem', zIndex: 2, display: 'flex', gap: '0.5rem' }}>
          {slides.map((_, i) => (
            <div 
              key={i} 
              onClick={() => setCurrent(i)}
              style={{ 
                width: i === current ? '30px' : '10px', 
                height: '10px', 
                background: 'white', 
                borderRadius: '10px', 
                cursor: 'pointer',
                transition: 'width 0.3s'
              }} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}
