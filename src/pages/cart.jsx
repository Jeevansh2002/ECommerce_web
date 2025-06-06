import React from 'react';

function Cart({ cartItems = [] }) {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <p>You have {cartItems.length} item{cartItems.length > 1 ? 's' : ''} in your cart.</p>
      )}
    </div>
  );
}

export default Cart;
