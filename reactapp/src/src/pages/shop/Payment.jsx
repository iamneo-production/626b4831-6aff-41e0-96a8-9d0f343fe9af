import React, { useState } from 'react';
import './Payment.css';

function Payment() {
  const [paymentMethod, setPaymentMethod] = useState('');

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Process the payment
    console.log(`Payment method selected: ${paymentMethod}`);
  };

  return (
    <div className="payment-container">
      <h2 className="payment-title">Payment</h2>
      <form onSubmit={handleSubmit} className="payment-form">
        <div className="payment-methods">
          <div className="payment-option">
            <input
              type="radio"
              id="upi"
              value="upi"
              checked={paymentMethod === 'upi'}
              onChange={handlePaymentMethodChange}
            />
            <label htmlFor="upi">UPI</label>
          </div>
          <div className="payment-option">
            <input
              type="radio"
              id="credit-card"
              value="credit-card"
              checked={paymentMethod === 'credit-card'}
              onChange={handlePaymentMethodChange}
            />
            <label htmlFor="credit-card">Credit Card</label>
          </div>
        </div>
        {paymentMethod && (
          <div className="payment-details">
            {paymentMethod === 'upi' && (
              <div className="upi-payment">
                <label htmlFor="upi-id">UPI ID</label>
                <input type="text" id="upi-id" required />
              </div>
            )}
            {paymentMethod === 'credit-card' && (
              <div className="credit-card-payment">
                <label htmlFor="card-number">Card Number</label>
                <input type="text" id="card-number" required />
                <label htmlFor="card-holder">Card Holder Name</label>
                <input type="text" id="card-holder" required />
                <label htmlFor="expiry-date">Expiry Date</label>
                <input type="text" id="expiry-date" required />
                <label htmlFor="cvv">CVV</label>
                <input type="text" id="cvv" required />
              </div>
            )}
          </div>
        )}
        <button type="submit" className="payment-button">
          Pay Now
        </button>
      </form>
    </div>
  );
}

export default Payment;
