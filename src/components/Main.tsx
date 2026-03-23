export function Main() {
  return (
    <div className="container fade-in" style={{ textAlign: 'center', padding: '4rem 0' }}>
      <div style={{ 
        fontFamily: 'var(--font-heading)', 
        fontSize: 'clamp(3rem, 10vw, 5rem)', 
        fontWeight: '900', 
        marginBottom: '1rem',
        background: 'var(--gradient)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        display: 'inline-block'
      }}>
        RefractaTech
      </div>
      
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', fontWeight: '600' }}>Expertos en Tecnología & Soluciones Industriales</h2>
        <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
          Fundada en 2025, RefractaTech nació con la visión de liderar el mercado tecnológico a través de la innovación y la excelencia en el servicio. Somos una cadena especializada en la venta de productos, accesorios y repuestos de alta gama, complementada con un servicio técnico profesional de mantenimiento de PCs y reparación de dispositivos móviles.
        </p>
      </div>
    </div>
  );
}
