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
        <img style={{ width: 150 }} src='https://svs.gsfc.nasa.gov/vis/a010000/a010800/a010841/perpetualocean_cover_1024x676.jpg' alt='...' />
      </div>
      <div className="accordion-content">
        <div className="accordion-content-inner">
          <img src='https://svs.gsfc.nasa.gov/vis/a000000/a003800/a003827/siggraph_currents_STILL2.18878.jpg' width={'170px'} />
          <img src='https://gisgeography.com/wp-content/uploads/2017/12/NASA-Scientific-Visual-Studio-Ocean-Currents-Maps.png' style={{ width: '250px' }} />
          <img src='' style={{ width: '170px' }} />
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
