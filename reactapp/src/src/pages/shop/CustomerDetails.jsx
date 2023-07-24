import React, { useState } from 'react';
import './CustomerDetails.css';

function CustomerDetails() {
  const [customer, setCustomer] = useState({
    customerId: '',
    name: '',
    address: '',
    phoneNumber: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCustomer((prevCustomer) => ({
      ...prevCustomer,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Process customer details
    console.log(customer);
  };

  return (
    <div className="customer-details-container">
      <h2 className="customer-details-title">Customer Details</h2>
      <form onSubmit={handleSubmit} className="customer-details-form">
        <div className="form-group">
          <label htmlFor="customerId">Customer ID</label>
          <input
            type="text"
            id="customerId"
            name="customerId"
            value={customer.customerId}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={customer.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={customer.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={customer.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="customer-details-button">
          Save
        </button>
      </form>
    </div>
  );
}

export default CustomerDetails;
