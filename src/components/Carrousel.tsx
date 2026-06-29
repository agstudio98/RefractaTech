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
      <div className="glass-card carousel-card">
        {slides.map((s, i) => (
          <div 
            key={i} 
            className="carousel-slide"
            style={{ 
              opacity: i === current ? 1 : 0, 
              zIndex: i === current ? 1 : 0
            }}
          >
            <img src={s.img} alt={s.title} className="carousel-img" />
            <div className="carousel-overlay">
              <h2 className="carousel-title">{s.title}</h2>
              <p className="carousel-subtitle">{s.subtitle}</p>
            </div>
          </div>
        ))}
        
        <div className="carousel-indicators">
          {slides.map((_, i) => (
            <div 
              key={i} 
              onClick={() => setCurrent(i)}
              className="carousel-dot"
              style={{ 
                width: i === current ? '30px' : '10px'
              }} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}
