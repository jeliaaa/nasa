import React, { useState } from 'react';
import './AccordionItem.css';

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accordion-item ${isOpen ? 'open' : ''}`}>
      <div className="accordion-title" onClick={toggleAccordion}>
        <img style={{width : 150}} src='https://www.webexhibits.org/calendars/imagesFolder/moonphase/fullZ.jpg' alt='...' />
      </div>
      <div className="accordion-content">
        <div className="accordion-content-inner">
            {[1,2,3,4,5,6,7].map((id) => {
                return(
                    <img src='https://www.webexhibits.org/calendars/imagesFolder/moonphase/fullZ.jpg' style={{width:'100px'}} />
                )
            })}
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
