import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error:", err));
  }, []);

  const addToCart = (product) => {
    alert(`${product.title} added to cart!`);
  };

  return (
    <div className="App">
      <header>
        <h1>My E-Commerce Website</h1>
        <nav>
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="products">
        <h2>Products</h2>
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product">
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>${product.price}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <p>&copy; 2025 YourCompany. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
