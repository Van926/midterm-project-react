import React, { useState } from 'react';
import './Styles.css';

const InventoryManagementSystem = () => {
  const [items, setItems] = useState([]);

  // Form state variables
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('Clothing');  
  const [errorMessage, setErrorMessage] = useState('');  
  const [message, setMessage] = useState('');

  // State to show/hide forms
  const [showAddForm, setShowAddForm] = useState(false);
  const [showUpdateForm, setShowUpdateForm] = useState(false);

  // Function to add item
  const AddItem = (e) => {
    e.preventDefault();

    const existingItem = items.find((item) => item.id === id);

    if (existingItem) {
      setErrorMessage('Error: Item ID is already in use.');
      setMessage('');  // Clear the success message
    } else {
      const newItem = {
        category: category,
        id: id,
        name: name,
        quantity: Number(quantity),
        price: Number(price)
      };

      setItems([...items, newItem]);
      setMessage('Item Added Successfully!');
      setErrorMessage(''); 

      // Clear form inputs
      setId('');
      setName('');
      setQuantity('');
      setPrice('');
      setCategory('Clothing');
    }
  };

  // Function to update an item
  const UpdateItem = (e) => {
    e.preventDefault();

    const existingItemIndex = items.findIndex((item) => item.id === id);

    if (existingItemIndex !== -1) {
      // Item found, update it
      const updatedItem = {
        id,
        name: name || items[existingItemIndex].name,
        quantity: quantity || items[existingItemIndex].quantity,
        price: price || items[existingItemIndex].price,
        category: category || items[existingItemIndex].category,
      };

      // Update the items array
      const updatedItems = [...items];
      updatedItems[existingItemIndex] = updatedItem;
      setItems(updatedItems);

      setMessage(`Item with ID ${id} has been updated successfully!`);
      setErrorMessage(''); // Clear error message

      // Clear form inputs
      setId('');
      setName('');
      setQuantity('');
      setPrice('');
      setCategory('Clothing');
    } else {
      // Item not found
      setErrorMessage('Error: Item not found.');
      setMessage(''); // Clear success message
    }
  };

  const handleShowAddForm = () => {
    setShowAddForm(true);
    setShowUpdateForm(false);
    setErrorMessage('');
    setMessage('');
  };

  const handleShowUpdateForm = () => {
    setShowAddForm(false);
    setShowUpdateForm(true);
    setErrorMessage('');
    setMessage('');
  };

  const handleOtherButtonClick = () => {
    setShowAddForm(false);
    setShowUpdateForm(false);
    setErrorMessage('');
    setMessage('');
  };

  return (
    <div>
      <h1>Item Management System</h1>

      {/* Action buttons */}
      <div className='Container-btns'>
        <button onClick={handleShowAddForm}>Add Item</button>
        <button onClick={handleShowUpdateForm}>Update Item</button>
        <button onClick={handleOtherButtonClick}>Remove Item</button>
        <button onClick={handleOtherButtonClick}>Display Items by Category</button>
        <button onClick={handleOtherButtonClick}>Display All Items</button>
        <button onClick={handleOtherButtonClick}>Search Item</button>
        <button onClick={handleOtherButtonClick}>Sort Items</button>
        <button onClick={handleOtherButtonClick}>Display Low Stock Items</button>
      </div>

      {/* Add Item Form - Visible only when showAddForm is true */}
      {showAddForm && (
        <div className='AddForm-Container'>
          <h2>Add Item</h2>

          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          {message && !errorMessage && <p style={{ color: 'green' }}>{message}</p>}

          <form onSubmit={AddItem}>
            <div className='ID-form'>
              <label>ID: </label>
              <input type="text" value={id} onChange={(e) => setId(e.target.value)} required />
            </div>

            <div className='Name-form'>
              <label>Name: </label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>

            <div className='Price-form'>
              <label>Price: </label>
              <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
            </div>

            <div className='Quantity-form'>
              <label>Quantity: </label>
              <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
            </div>

            <div className='Category-form'>
              <label>Category: </label>
              <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="Clothing">Clothing</option>
                <option value="Electronics">Electronics</option>
                <option value="Entertainment">Entertainment</option>
              </select>
            </div>

            <button className='submit-btn' type="submit">Add Item</button>
          </form>
        </div>
      )}

      {/* Update Item Form - Visible only when showUpdateForm is true */}
      {showUpdateForm && (
        <div className='UpdateForm-Container'>
          <h2>Update Item</h2>

          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          {message && !errorMessage && <p style={{ color: 'green' }}>{message}</p>}

          <form onSubmit={UpdateItem}>
            <div className='ID-form'>
              <label>Item ID: </label>
              <input type="text" value={id} onChange={(e) => setId(e.target.value)} required />
            </div>

            <div className='Name-form'>
              <label>New Name (optional): </label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>

            <div className='Price-form'>
              <label>New Price (optional): </label>
              <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
            </div>

            <div className='Quantity-form'>
              <label>New Quantity (optional): </label>
              <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
            </div>

            <div className='Category-form'>
              <label>New Category (optional): </label>
              <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="Clothing">Clothing</option>
                <option value="Electronics">Electronics</option>
                <option value="Entertainment">Entertainment</option>
              </select>
            </div>

            <button className='submit-btn' type="submit">Update Item</button>
          </form>
        </div>
      )}

      {/* Items List */}
      <h2>Items List</h2>
      <div>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.name} - Category: {item.category}, Quantity: {item.quantity}, Price: ${item.price}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InventoryManagementSystem;
