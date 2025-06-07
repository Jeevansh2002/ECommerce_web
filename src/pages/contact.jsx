import React, { useState } from 'react';
import './contact.css';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thanks for contacting us, ${formData.name}! We will get back to you soon.`);
    setFormData({ name: '', email: '', message: '' }); // clear form
  };

  return (
    <section className="contact-section">
      <h2>Contact Us</h2>
      <p>Have questions or want to work together? Send us a message!</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input 
            type="text" 
            name="name" 
            placeholder="Your full name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </label>

        <label>
          Email
          <input 
            type="email" 
            name="email" 
            placeholder="your.email@example.com" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </label>

        <label>
          Message
          <textarea 
            name="message" 
            placeholder="Write your message here..." 
            value={formData.message} 
            onChange={handleChange} 
            required 
            rows="5"
          />
        </label>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
