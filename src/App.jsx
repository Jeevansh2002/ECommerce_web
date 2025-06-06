import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import Home from './pages/Home';
import Products from './pages/products';
import Contact from './pages/contact';
import Cart from './pages/cart';
import './App.css';


function App() {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
    setCartCount(cartCount + 1);
  };

  return (
    <Router>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        minHeight: '100vh' 
      }}>
        <header style={{ 
          background: '#007bff', 
          color: 'white', 
          padding: '1rem', 
          textAlign: 'center', 
          position: 'relative' 
        }}>
          <h1>My E-Commerce Website</h1>
          <nav>
            <ul style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '1rem', 
              listStyle: 'none', 
              padding: 0 
            }}>
              <li><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link></li>
              <li><Link to="/products" style={{ color: 'white', textDecoration: 'none' }}>Products</Link></li>
              <li><Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link></li>
            </ul>
          </nav>

          <Link to="/cart" style={{
            position: 'absolute',
            top: '10px',
            right: '20px',
            cursor: 'pointer',
            fontSize: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            color: 'white',
            textDecoration: 'none'
          }}>
            <FaShoppingCart />
            <span style={{
              backgroundColor: 'red',
              borderRadius: '50%',
              padding: '2px 7px',
              fontSize: '0.9rem',
              color: 'white',
              fontWeight: 'bold'
            }}>
              {cartCount}
            </span>
          </Link>
        </header>

        <main style={{ flex: 1, maxWidth: '1200px', margin: 'auto', padding: '1rem' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products onAddToCart={handleAddToCart} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart cartItems={cartItems} />} />
          </Routes>
        </main>

        <footer style={{ textAlign: 'center', padding: '1rem', background: '#333', color: 'white' }}>
          <p>&copy; 2025 YourCompany. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}


export default App;
