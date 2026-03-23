const products = [
  { 
    name: 'PC Gamer RTX 4060 Complete', 
    price: '$1,299', 
    original: '$1,599', 
    img: 'https://images.unsplash.com/photo-1603302576837-37561ab7a3c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'PCs & Laptops'
  },
  { 
    name: 'iPhone 16 Pro Max 256GB', 
    price: '$1,199', 
    img: 'https://images.unsplash.com/photo-1723749527666-86f6f931b3e4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Celulares'
  },
  { 
    name: 'Monitor Curvo 49" Ultrawide', 
    price: '$799', 
    original: '$999', 
    img: 'https://images.unsplash.com/photo-1496174612588-082c6a16a91e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Monitores'
  },
  { 
    name: 'Teclado Mecánico Wireless', 
    price: '$129', 
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Accesorios'
  },
  { 
    name: 'RAM Corsair 64GB DDR5', 
    price: '$249', 
    img: 'https://images.unsplash.com/photo-1628664354063-f7e5e9c6d71e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Repuestos'
  },
  { 
    name: 'Headset Gaming Pro', 
    price: '$179', 
    img: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    category: 'Accesorios'
  },
];

export function Products() {
  const discount = (p: any) => p.original ? Math.round((1 - parseInt(p.price.slice(1)) / parseInt(p.original.slice(1))) * 100) : 0;

  return (
    <section className="full-section" style={{ 
      paddingTop: '20vh',
      background: 'linear-gradient(180deg, var(--bg-alt) 0%, rgba(255, 140, 0, 0.05) 100%)' 
    }}>
      <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
        <h2 style={{ marginBottom: '1rem' }}>Productos Destacados</h2>
        <p style={{ fontSize: '1.5rem', color: 'var(--text)', maxWidth: '900px', margin: '0 auto' }}>
          La mejor selección de tecnología premium para gamers y profesionales
        </p>
      </div>
      <div className="immersive-grid">
        {products.map((product, index) => (
          <div key={index} className="product-card glass-card">
            {product.original && (
              <div className="discount-badge">-{discount(product)}%</div>
            )}
            <img 
              src={product.img} 
              alt={product.name}
              className="product-img"
            />
            <h3>{product.name}</h3>
            <p style={{ color: 'var(--text)', margin: '1rem 0 1.5rem', fontSize: '1.1rem' }}>{product.category}</p>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--accent)', marginBottom: '1rem' }}>
              {product.price}
            </div>
            {product.original && (
              <div style={{ textDecoration: 'line-through', color: 'var(--text)', fontSize: '1.3rem', marginBottom: '2.5rem' }}>
                {product.original}
              </div>
            )}
            <button className="btn-premium">Comprar Ahora</button>
          </div>
        ))}
      </div>
    </section>
  );
}

