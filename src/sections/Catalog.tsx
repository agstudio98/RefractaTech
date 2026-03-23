import { useState } from 'react';
import { ProductFilter } from '../components/ProductFilter';

const allProducts = [
  { id: 1, name: 'ASUS ROG Zephyrus G16', price: '$2,199', category: 'Laptops', parent: 'Computación', img: 'https://images.unsplash.com/photo-1603302576837-37561ab7a3c5?auto=format&fit=crop&w=600&q=80' },
  { id: 2, name: 'iPhone 16 Pro Max', price: '$1,599', category: 'Celulares', parent: 'Mobile', img: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?auto=format&fit=crop&w=600&q=80' },
  { id: 3, name: 'Keychron Q1 Pro', price: '$199', category: 'Accesorios', parent: 'Accesorios', img: 'https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=600&q=80' },
  { id: 4, name: 'Corsair 64GB DDR5', price: '$299', category: 'Repuestos', parent: 'Mobile', img: 'https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=600&q=80' },
  { id: 5, name: 'Custom PC Build', price: '$3,499', category: 'PCs Armadas', parent: 'Computación', img: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=600&q=80' },
];

export default function Catalog() {
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filteredProducts = activeCategory === 'Todos' 
    ? allProducts 
    : allProducts.filter(p => p.category === activeCategory || p.parent === activeCategory);

  return (
    <div className="container">
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2>Catálogo de Productos</h2>
        <p>Encuentra lo último en tecnología y servicios.</p>
      </div>

      <ProductFilter onFilterChange={setActiveCategory} activeFilter={activeCategory} />

      <div className="grid-cols-3">
        {filteredProducts.map((product) => (
          <div key={product.id} className="glass-card fade-in" style={{ padding: '1.5rem', cursor: 'pointer' }} onClick={() => window.location.href = '#messages'}>
            <div style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: '1rem', aspectRatio: '4/3' }}>
              <img src={product.img} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-secondary)', fontWeight: '600' }}>
              {product.category}
            </span>
            <h3 style={{ fontSize: '1.1rem', margin: '0.2rem 0' }}>{product.name}</h3>
            <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '1.1rem', fontWeight: '700' }}>{product.price}</span>
              <button style={{ padding: '0.5rem 1rem', borderRadius: '12px', border: 'none', background: 'var(--accent)', color: 'white', fontWeight: '600' }}>
                Contactar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
