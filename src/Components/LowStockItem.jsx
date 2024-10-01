import React from 'react';

const LowStockItems = ({ items }) => {

  const lowStockItems = items.filter(item => item.quantity <= 5);

  return (
    <div className='LowStock-Container'>
      <h2>Low Stock Items (Quantity 5 or below)</h2>
      {lowStockItems.length === 0 ? (
        <p>No low stock items available.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Category</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {lowStockItems.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.quantity}</td>
                <td>${item.price.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default LowStockItems;
