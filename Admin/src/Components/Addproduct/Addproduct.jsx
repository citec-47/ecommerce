import React from 'react';
import './Addproduct.css';

const Addproduct = () => {
  return (
    <div className='addproduct'>
      <div className="addproduct-itemfield">
        <p>Product title </p>
        <input type="text" name='name' placeholder='Type Here' />
      </div>
    </div>
  );
};

export default Addproduct;
