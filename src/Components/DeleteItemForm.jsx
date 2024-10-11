
import React, { useState } from 'react';

const DeleteItemForm = ({ items, setItems }) => {
  const [idToDelete, setIdToDelete] = useState('');
  const [deletedItemName, setDeletedItemName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleDeleteItem = (e) => {
    e.preventDefault();

   
    const itemToDelete = items.find((item) => item.id === idToDelete);

    if (itemToDelete) {

      const updatedItems = items.filter((item) => item.id !== idToDelete);
      setItems(updatedItems);

      setDeletedItemName(itemToDelete.name);
      setErrorMessage('');
    } else {
      setDeletedItemName('');
      setErrorMessage('Item not found');
    }
    setIdToDelete('');
  };

  return (
    <div className='Form-Container scale-up'>
      <h2>Delete Item</h2>
      <form onSubmit={handleDeleteItem}>
        <label>Item ID: </label>
        <input
          type='text'
          value={idToDelete}
          onChange={(e) => setIdToDelete(e.target.value)}
          required
        />
        <button className='Delete-btn' type='submit'>Delete</button>
      </form>

      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      {deletedItemName && !errorMessage && (
        <p style={{ color: 'green' }}>Removed item {deletedItemName} from Inventory</p>
      )}
    </div>
  );
};

export default DeleteItemForm;
