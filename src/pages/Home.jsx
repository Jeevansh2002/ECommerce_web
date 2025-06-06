import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';


function Home() {
  return (
    <div className="home-container">
      <section className="hero">
        <h1>Welcome to My E-Commerce Store</h1>
        <p>Built with React | Modern UI | Real-time API Integration</p>
        <Link to="/products" className="cta-button">Explore Products</Link>
      </section>

      <section className="features">
        <h2>Why Choose Us?</h2>
        <div className="feature-grid">
          <div className="feature">
            <h3>⚡ Fast & Responsive</h3>
            <p>Built using React and Vite for lightning-fast performance and smooth experience on all devices.</p>
          </div>
          <div className="feature">
            <h3>🛒 Real Products API</h3>
            <p>Product data fetched from a real online store API (FakeStoreAPI) – showcasing real integration skills.</p>
          </div>
          <div className="feature">
            <h3>💡 Clean UI/UX</h3>
            <p>Minimalistic and user-friendly design for ease of use and modern appeal.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
