import React from 'react';
import './Breadrums.css';
import arrow_icon from '../Assets/breadcrum_arrow.png'

const Breadcrumbs = ({ product }) => {
  return (
    <div className='breadcrumbs'>
      Home <img src={arrow_icon} alt="arrow icon" /> SHOP <img src={arrow_icon} alt="arrow icon" /> {product.category}
      <img src={arrow_icon} alt="arrow icon" /> {product.name}
    </div>
  );
}

export default Breadcrumbs;
