import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Background3D } from './components/Background3D';
import Home from './sections/Home';
import Catalog from './sections/Catalog';
import Messages from './sections/Messages';
import Chatbot from './sections/Chatbot';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const renderSection = () => {
    switch (activeSection) {
      case 'home': return <Home />;
      case 'catalog': return <Catalog />;
      case 'messages': return <Messages />;
      case 'chatbot': return <Chatbot />;
      default: return <Home />;
    }
  };

  return (
    <div className="App">
      <Background3D />
      <Navbar onNavigate={setActiveSection} activeSection={activeSection} />
      <main className="main-content" style={{ minHeight: '80vh', paddingTop: '120px', paddingBottom: '100px' }}>
        {renderSection()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
