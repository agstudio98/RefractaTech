export default function Messages() {
  return (
    <div className="container">
      <div className="glass-card fade-in section-card">
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '2.5rem' }}>Contáctanos</h2>
          <p>Envíanos tu consulta y te responderemos a la brevedad.</p>
        </div>

        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} onSubmit={(e) => e.preventDefault()}>
          <div className="grid-cols-2">
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '600' }}>Nombre</label>
              <input 
                type="text" 
                placeholder="Tu nombre completo" 
                style={{
                  width: '100%',
                  padding: '1rem',
                  borderRadius: '15px',
                  border: '1px solid rgba(0,0,0,0.1)',
                  background: 'rgba(255,255,255,0.5)',
                  outline: 'none'
                }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '600' }}>Asunto</label>
              <select 
                style={{
                  width: '100%',
                  padding: '1rem',
                  borderRadius: '15px',
                  border: '1px solid rgba(0,0,0,0.1)',
                  background: 'rgba(255,255,255,0.5)',
                  outline: 'none'
                }}
              >
                <option>Consulta General</option>
                <option>Soporte Técnico</option>
                <option>Ventas / Catálogo</option>
                <option>Repuestos</option>
              </select>
            </div>
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '600' }}>Email</label>
            <input 
              type="email" 
              placeholder="tu@email.com" 
              style={{
                width: '100%',
                padding: '1rem',
                borderRadius: '15px',
                border: '1px solid rgba(0,0,0,0.1)',
                background: 'rgba(255,255,255,0.5)',
                outline: 'none'
              }}
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '600' }}>Mensaje</label>
            <textarea 
              rows={5} 
              placeholder="Escribe tu mensaje aquí..." 
              style={{
                width: '100%',
                padding: '1rem',
                borderRadius: '15px',
                border: '1px solid rgba(0,0,0,0.1)',
                background: 'rgba(255,255,255,0.5)',
                outline: 'none',
                resize: 'none'
              }}
            />
          </div>
          <button 
            type="submit"
            style={{
              padding: '1.2rem',
              borderRadius: '15px',
              border: 'none',
              background: 'var(--text)',
              color: 'white',
              fontWeight: '700',
              cursor: 'pointer',
              fontSize: '1rem',
              transition: 'transform 0.2s, background 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.02)';
              e.currentTarget.style.background = '#000';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.background = 'var(--text)';
            }}
          >
            Enviar Solicitud
          </button>
        </form>
      </div>
    </div>
  );
}
