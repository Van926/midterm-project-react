// DeleteItemForm.js
import React, { useState } from 'react';

const DeleteItemForm = ({ items, setItems }) => {
  const [idToDelete, setIdToDelete] = useState('');
  const [deletedItemName, setDeletedItemName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleDeleteItem = (e) => {
    e.preventDefault();

    // Find the item by ID
    const itemToDelete = items.find((item) => item.id === idToDelete);

    if (itemToDelete) {
      // Remove the item from the items list
      const updatedItems = items.filter((item) => item.id !== idToDelete);
      setItems(updatedItems);

      // Set the name of the deleted item for display
      setDeletedItemName(itemToDelete.name);
      setErrorMessage('');
    } else {
      setDeletedItemName('');
      setErrorMessage('Item not found');
    }

    // Reset the input field
    setIdToDelete('');
  };

  return (
    <div className='Form-Container'>
      <h2>Delete Item</h2>
      <form onSubmit={handleDeleteItem}>
        <label>Item ID: </label>
        <input
          type='text'
          value={idToDelete}
          onChange={(e) => setIdToDelete(e.target.value)}
          required
        />
        <button type='submit'>Delete</button>
      </form>

      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      {deletedItemName && !errorMessage && (
        <p style={{ color: 'green' }}>Removed item {deletedItemName} from Inventory</p>
      )}
    </div>
  );
};

export default DeleteItemForm;
