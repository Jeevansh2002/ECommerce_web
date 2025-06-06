import React, { useEffect, useState } from 'react';

function Products({onAddToCart}) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error("Error:", err));
  }, []);

  const addToCart = (product) => {
    alert(`${product.title} added to cart!`);
    if (onAddToCart) onAddToCart();
  };

  return (
    <section id="products" style={{ padding: '2rem' }}>
      <h2>Products</h2>
      <div className="product-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem'}}>
        {products.map(product => (
          <div key={product.id} className="product" style={{border: '1px solid #ccc', padding: '1rem', borderRadius: '10px', textAlign: 'center'}}>
            <img src={product.image} alt={product.title} style={{width: '100px', height: '100px', objectFit: 'contain'}} />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <button className="product-btn" onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
