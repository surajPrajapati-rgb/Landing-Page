import React, { useState } from "react";
import "./FAQs.css"; 


const FaqComponents = ({faqData}) => {
  return (
    <div className="faq-container">
      <h1>FAQs</h1>
      {faqData.map((item) => (
        <div className="faq-item">
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default FaqComponents;
