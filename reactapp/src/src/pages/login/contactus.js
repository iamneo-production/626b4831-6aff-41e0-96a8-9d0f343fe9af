import React, { useState } from 'react';
import "./contactus.css";

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className='contact-us-container'>

     <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <br></br>
          <label id='lb' htmlFor="text">Name:</label>
          <input className='in'
            type="text1"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          /><br></br>
        </div>
        <div>
          <label id='lb' htmlFor="email">Email:</label>
          <input className='in'
            type="text1"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label id='lb' htmlFor="message">Message:</label>
          <input className='in'
          type="text2"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></input>
        </div>
        <button className='btn' type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
