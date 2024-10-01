import React, { useState } from 'react';

const DeleteItemForm = ({ items, setItems }) => {
  const [deleteId, setDeleteId] = useState(''); // ID for deleting item
  const [errorMessage, setErrorMessage] = useState('');
  const [message, setMessage] = useState('');

  // Function to delete an item by ID
  const DeleteItem = (e) => {
    e.preventDefault();

    const existingItemIndex = items.findIndex((item) => item.id === deleteId);

    if (existingItemIndex !== -1) {
      const updatedItems = items.filter((item) => item.id !== deleteId); // Remove item
      setItems(updatedItems);
      setMessage(`Item with ID ${deleteId} has been deleted successfully!`);
      setErrorMessage('');
      setDeleteId(''); // Clear input
    } else {
      setErrorMessage(`Error: Item with ID ${deleteId} not found.`);
      setMessage('');
    }
  };

  return (
    <div className='Form-Container'>
      <h2>Delete Item</h2>

      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      {message && !errorMessage && <p style={{ color: 'green' }}>{message}</p>}

      <form onSubmit={DeleteItem}>
        <div className='ID-form'>
          <label>Item ID: </label>
          <input
            type="text"
            value={deleteId}
            onChange={(e) => setDeleteId(e.target.value)}
            required
          />
        </div>

        <button className='submit-btn' type="submit">
          Delete Item
        </button>
      </form>
    </div>
  );
};

export default DeleteItemForm;
