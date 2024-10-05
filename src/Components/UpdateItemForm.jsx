import React, { useState } from 'react';

const UpdateItemForm = ({ id, setId,price, setPrice, quantity, setQuantity,UpdateItem, errorMessage, message }) => {
  const [fieldToUpdate, setFieldToUpdate] = useState(''); 

  
  const handleFieldChange = (e) => {
    const selectedField = e.target.value;
    setFieldToUpdate(selectedField);
    if(selectedField === 'price'){
      setQuantity('')
    }else if (selectedField === 'quantity'){
      setPrice('')
    }



  };
  
  



  return (
    <div className='Form-Container scale-up'>
      <h2>Update Item</h2>

      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      {message && !errorMessage && <p style={{ color: 'green' }}>{message}</p>}

      <form onSubmit={UpdateItem}>
        <div className='ID-form'>
          <label>Item ID: </label>
          <input type="text" value={id} onChange={(e) => setId(e.target.value)} required />
        </div>

        <div className='FieldToUpdate-form'>
          <label>Field to Update: </label>
          <select value={fieldToUpdate} onChange={handleFieldChange} required>
            <option value="">--Select Field--</option>
            <option value="price">Price</option>
            <option value="quantity">Quantity</option>
          </select>
        </div>

       

        {fieldToUpdate === 'price' && (
          <div className='Price-form'>
            <label>New Price: </label>
            <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
          </div>
        )}

        {fieldToUpdate === 'quantity' && (
          <div className='Quantity-form'>
            <label>New Quantity: </label>
            <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
          </div>
        )}

        

        <button className='submit-btn' type="submit">Update Item</button>
      </form>
    </div>
  );
};

export default UpdateItemForm;
