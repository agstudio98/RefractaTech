export function Navbar({ onNavigate, activeSection }: { onNavigate: (section: string) => void, activeSection: string }) {
  const navItems = [
    { id: 'home', label: 'Inicio' },
    { id: 'catalog', label: 'Catálogo' },
    { id: 'messages', label: 'Contáctanos' },
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo" onClick={() => onNavigate('home')}>
          Refracta<span>Tech</span>
        </div>
        
        <ul className="nav-list">
          {navItems.map((item) => (
            <li key={item.id}>
              <button 
                onClick={() => onNavigate(item.id)} 
                className="nav-link"
                style={{ 
                  background: activeSection === item.id ? 'rgba(0,0,0,0.05)' : 'transparent',
                  color: activeSection === item.id ? 'var(--accent)' : 'var(--text)'
                }}
              >
                {item.label}
              </button>
            </li>
          ))}
          <li>
            <button 
              onClick={() => onNavigate('chatbot')} 
              className="nav-link"
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.5rem',
                background: activeSection === 'chatbot' ? 'rgba(0,0,0,0.05)' : 'transparent',
                color: activeSection === 'chatbot' ? 'var(--accent)' : 'var(--text)'
              }}
              title="Soporte"
            >
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
