import React from 'react';

const AddItemForm = ({ id, setId, name, setName, price, setPrice, quantity, 
    setQuantity, category, setCategory, AddItem, errorMessage, message }) => {

    
  return (
    <div className='Form-Container'>
      <h2>Add Item</h2>

      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      {message && !errorMessage && <p style={{ color: 'green' }}>{message}</p>}

      <form onSubmit={AddItem}>
        <div className='ID-form'>
           <p>ID</p>
          <input placeholder='ID' type="text" value={id} onChange={(e) => setId(e.target.value)} required />
        </div>

        <div className='Name-form'>
          <p>Name</p>
          <input placeholder='Name' type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>

        <div className='Price-form'>
          <p>Price</p>
          <input placeholder='Price'  type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
        </div>

        <div className='Quantity-form'>
          <p>Quantity</p>
          <input placeholder='Quantity'  type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
        </div>

        <div className='Category-form'>
          <p>Category</p>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="Clothing">Clothing</option>
            <option value="Electronics">Electronics</option>
            <option value="Entertainment">Entertainment</option>
          </select>
        </div>

        <button className='submit-btn' type="submit">Add Item</button>
      </form>
    </div>
  );
};

export default AddItemForm;
