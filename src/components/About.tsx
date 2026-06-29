export function About() {
  return (
    <div className="container">
      <div className="glass-card fade-in section-card">
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2>Contáctanos</h2>
          <p>¿Tienes alguna consulta o quieres realizar un pedido? Estamos aquí para ayudarte.</p>
        </div>

        <div className="about-grid">
          <div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Información</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <span style={{ fontSize: '1.2rem' }}>📍</span>
                <span>Av. Tecnología 123, Tech City</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <span style={{ fontSize: '1.2rem' }}>📧</span>
                <span>contacto@refractatech.com</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <span style={{ fontSize: '1.2rem' }}>📱</span>
                <span>+54 9 11 1234-5678</span>
              </div>
            </div>

            <div style={{ marginTop: '2rem' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Horarios</h3>
              <p style={{ margin: 0, fontSize: '0.95rem' }}>Lunes a Viernes: 9:00 - 18:00</p>
              <p style={{ margin: 0, fontSize: '0.95rem' }}>Sábados: 10:00 - 14:00</p>
            </div>
          </div>

          <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} onSubmit={(e) => e.preventDefault()}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '600' }}>Nombre</label>
              <input 
                type="text" 
                placeholder="Tu nombre" 
                style={{
                  width: '100%',
                  padding: '0.8rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(0,0,0,0.1)',
                  background: 'rgba(255,255,255,0.5)',
                  fontFamily: 'inherit'
                }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '600' }}>Email</label>
              <input 
                type="email" 
                placeholder="tu@email.com" 
                style={{
                  width: '100%',
                  padding: '0.8rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(0,0,0,0.1)',
                  background: 'rgba(255,255,255,0.5)',
                  fontFamily: 'inherit'
                }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '600' }}>Mensaje</label>
              <textarea 
                rows={4} 
                placeholder="¿En qué podemos ayudarte?" 
                style={{
                  width: '100%',
                  padding: '0.8rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(0,0,0,0.1)',
                  background: 'rgba(255,255,255,0.5)',
                  fontFamily: 'inherit',
                  resize: 'vertical'
                }}
              />
            </div>
            <button 
              type="submit"
              style={{
                padding: '1rem',
                borderRadius: '12px',
                border: 'none',
                background: 'var(--gradient)',
                color: 'white',
                fontWeight: '700',
                cursor: 'pointer',
                marginTop: '0.5rem',
                transition: 'transform 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
