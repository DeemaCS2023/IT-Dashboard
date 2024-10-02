import React from 'react';
import './common_questions.css';
import  { useState } from 'react';


export default function Common_questions(){
    const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const Common_questions = [
    {
      question: 'What is power bi?',
      answer: 'It is one of Microsoft’s programs and is a set of statistical analysis tools through which data can be easily handled and then the results can be displayed in attractive ways and interactive visualizations.  It is characterized by an easy interface that can be used by non-specialists. It is also characterized by the ability to connect to a number of data sources, as it provides an easy mechanism for importing data from these sources.',
    },
    {
      question: 'What do I need to view reports?',
      answer: 'You just need to be connected to the Internet.',
    },
    {
      question: 'Can I print reports?',
      answer: 'Yes, you can by clicking on the print icon.',
    },
  
   
  ];

    return(
      
        <>
        
          <link href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css" rel="stylesheet"
          />
      <title>FAQ</title>
      <div className="faq_container">
  
        <div className="accordion__wrapper">
        <img  src ="https://cdn-icons-png.flaticon.com/512/8743/8743975.png" alt="common photo" width="300" height="312"  align="right"  className='image_move2'/>
          <h1 className="accordion__title">Common questions</h1>

          {Common_questions.map((item, index) => (
            <div key={index} className="accordion">
              <div className="accordion__header" onClick={() => toggleAccordion(index)}>
                <h2 className="accordion__question">{item.question}</h2>
                <span className="accordion__icon">
                  <i id="accordion-icon" className={activeIndex === index ? 'ri-subtract-line' : 'ri-add-line'}></i>
                </span>
              </div>
              
              <div className={`accordion__content ${activeIndex === index ? 'active' : ''}`}>
                <p className="accordion__answer">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </>
  );
}
    