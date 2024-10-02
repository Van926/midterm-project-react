import React, { useState } from 'react';

const SortItems = ({ items }) => {
  const [sortBy, setSortBy] = useState('quantity');
  const [order, setOrder] = useState('ascending');

  // Function to handle the sorting logic
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'quantity') {
      return order === 'ascending' ? a.quantity - b.quantity : b.quantity - a.quantity;
    } else if (sortBy === 'price') {
      return order === 'ascending' ? a.price - b.price : b.price - a.price;
    }
    return 0;
  });

  return (
    <div>
        <div className='Form-Container'>
        <h2>Sorting items by {sortBy} in {order} order</h2>
        
            <div className='Sort-Options'>
                <label>Sort by: </label>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="quantity">Quantity</option>
                <option value="price">Price</option>
                </select>

                <label>Order: </label>
                <select value={order} onChange={(e) => setOrder(e.target.value)}>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
                </select>
            </div>
        </div>
          
            <div className='Itemlist-Container'>
              <h2>Item List</h2>

              {sortedItems.length === 0 ? (
              <p className='No-Items'>No Items yet.</p>
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
                        {sortedItems.map(item => (
                          <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.category}</td>
                            <td>{item.quantity}</td>
                            <td>${item.price}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
              </div>

          
    </div>
  );
};

export default SortItems;
