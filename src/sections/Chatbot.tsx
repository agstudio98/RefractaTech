import { useState } from 'react';

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { role: 'bot', text: '¡Hola! Soy el asistente de RefractaTech. ¿En qué puedo ayudarte hoy?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { role: 'user', text: input };
    setMessages([...messages, userMsg]);
    setInput('');

    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'bot', 
        text: 'Gracias por tu mensaje. Un asesor humano se pondrá en contacto contigo pronto si es necesario. ¿Algo más?' 
      }]);
    }, 1000);
  };

  return (
    <div className="container">
      <div className="glass-card fade-in" style={{ 
        maxWidth: '500px', 
        margin: '0 auto', 
        height: '600px', 
        display: 'flex', 
        flexDirection: 'column',
        overflow: 'hidden'
      }}>
        <div style={{ 
          padding: '1.5rem', 
          background: 'var(--text)', 
          color: 'white', 
          display: 'flex', 
          alignItems: 'center', 
          gap: '1rem' 
        }}>
          <div style={{ width: '40px', height: '40px', background: 'var(--gradient)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>RT</div>
          <div>
            <h3 style={{ margin: 0, fontSize: '1.1rem', color: 'white' }}>Soporte RefractaTech</h3>
            <span style={{ fontSize: '0.8rem', opacity: 0.8 }}>En línea para ayudarte</span>
          </div>
        </div>

        <div style={{ 
          flex: 1, 
          padding: '1.5rem', 
          overflowY: 'auto', 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '1rem',
          background: 'rgba(255,255,255,0.3)' 
        }}>
          {messages.map((msg, i) => (
            <div key={i} style={{ 
              alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
              maxWidth: '80%',
              padding: '1rem',
              borderRadius: msg.role === 'user' ? '18px 18px 2px 18px' : '18px 18px 18px 2px',
              background: msg.role === 'user' ? 'var(--text)' : 'white',
              color: msg.role === 'user' ? 'white' : 'var(--text)',
              boxShadow: 'var(--shadow-sm)',
              fontSize: '0.95rem',
              lineHeight: '1.4'
            }}>
              {msg.text}
            </div>
          ))}
        </div>

        <form onSubmit={handleSend} style={{ padding: '1.5rem', borderTop: '1px solid rgba(0,0,0,0.05)', display: 'flex', gap: '0.5rem' }}>
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribe tu duda..." 
            style={{
              flex: 1,
              padding: '0.8rem 1.2rem',
              borderRadius: '25px',
              border: '1px solid rgba(0,0,0,0.1)',
              background: 'white',
              outline: 'none'
            }}
          />
          <button 
            type="submit"
            style={{
              width: '45px',
              height: '45px',
              borderRadius: '50%',
              border: 'none',
              background: 'var(--text)',
              color: 'white',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.2rem'
            }}
          >
            →
          </button>
        </form>
      </div>
    </div>
  );
}
