import React, { useState } from 'react';

const UpdateItemForm = ({ id, setId, name, setName, price, setPrice, quantity, setQuantity, category, setCategory, UpdateItem, errorMessage, message }) => {
  // State to keep track of which field to update
  const [fieldToUpdate, setFieldToUpdate] = useState(''); 

  const handleFieldChange = (e) => {
    setFieldToUpdate(e.target.value);
  };

  return (
    <div className='Form-Container'>
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
            <option value="name">Name</option>
            <option value="price">Price</option>
            <option value="quantity">Quantity</option>
            <option value="category">Category</option>
          </select>
        </div>

        {fieldToUpdate === 'name' && (
          <div className='Name-form'>
            <label>New Name: </label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
        )}

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

        {fieldToUpdate === 'category' && (
          <div className='Category-form'>
            <label>New Category: </label>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="Clothing">Clothing</option>
              <option value="Electronics">Electronics</option>
              <option value="Entertainment">Entertainment</option>
            </select>
          </div>
        )}

        <button className='submit-btn' type="submit">Update Item</button>
      </form>
    </div>
  );
};

export default UpdateItemForm;
