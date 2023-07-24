import React, { useState } from 'react';
import './faq.css';

const FAQPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: 'What types of Products do you sell?',
      answer:
      'We offer a variety of Products, including cereals and spices, Chocoalate, Cooldrinks, chips, vegetables, fruits and more.'
    },
    {
      question: 'Can I purchase a product under 100 rs',
      answer:
      'Yes, You can able to purchase it but the cost may vary due to deliver charges.'
    },
    {
      question: 'Can I return or exchange the products?',
      answer:
      'Our return and exchange policy may vary depending on the products and the specific circumstances. We recommend reviewing our return policy or contacting our customer service for detailed information.' 
    },
    {
      question: 'Do you offer discount on your products?',
      answer:
      'Yes, we provide Discounts and coupens.'
        },
        {
          question: 'Are your products brand new?',
          answer:
          'Yes, all our products are brand new, unless otherwise specified.'
            },
    // Add more FAQ items as needed
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq-page">
      <br></br><br></br><br></br><br></br>
      <h1>Frequently Asked Questions</h1>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`faq-item ${activeIndex === index ? 'active' : ''}`}
        >
          <div
            className="faq-question"
            onClick={() => toggleAccordion(index)}
          >
            {faq.question}
            <span className="arrow">{activeIndex === index ? '-' : '+'}</span>
          </div>
          {activeIndex === index && (
            <div className="faq-answer">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQPage;
