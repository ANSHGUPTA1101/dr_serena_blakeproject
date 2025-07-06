import React, { useState } from 'react'
import "./FAQ.css"

const FAQ = ({faq}) => {
    const [openIndex, setOpenIndex] = useState(null)

     const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);

  }
  return (
       <div className="accordion-container">
        <h1>Frequently Asked Question</h1>
        <br />
      {faq.map((item, index) => (
        <div key={index} className="accordion-item">
          <div className="accordion-question" onClick={() => toggle(index)}>
          <span className={`circle-arrow ${openIndex === index ? 'rotate' : ''}`}>
              ▶
            </span>
            {item.question}
            <br />
          </div>
          {openIndex === index && (
            <div className="accordion-answer">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  
  )
}

export default FAQ