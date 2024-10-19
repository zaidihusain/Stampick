'use client'

import React, { useState } from 'react';

function Vieworder() {
    const [order, setOrder] = useState(
       
      {
      
        orderId: 'ORD123456',
        customerName: 'John Doe',
        address: '123 Elm Street, Springfield, IL',
        items: [
          { name: 'Stamp A', quantity: 5, imageUrl: 'https://t4.ftcdn.net/jpg/00/51/22/45/240_F_51224596_cJUzEh5VJ0glGjxymmXGwP3TPFQAIc7k.jpg' },
          { name: 'Stamp B', quantity: 2, imageUrl: 'https://as2.ftcdn.net/v2/jpg/05/35/64/57/1000_F_535645774_Exwl4P1KSGBBsWJIhggiJNFRp4nH6Nz5.jpg' },
        ],
        totalAmount: '$150.00',
        deliveryStatus: 'Pending',
      },
      {
      
        orderId: 'ORD123456',
        customerName: 'John Doe',
        address: '123 Elm Street, Springfield, IL',
        items: [
          { name: 'Stamp A', quantity: 5, imageUrl: 'https://t4.ftcdn.net/jpg/00/51/22/45/240_F_51224596_cJUzEh5VJ0glGjxymmXGwP3TPFQAIc7k.jpg' },
          { name: 'Stamp B', quantity: 2, imageUrl: 'https://as2.ftcdn.net/v2/jpg/05/35/64/57/1000_F_535645774_Exwl4P1KSGBBsWJIhggiJNFRp4nH6Nz5.jpg' },
        ],
        totalAmount: '$150.00',
        deliveryStatus: 'Pending',
      },
     

    
    )
    
    
      // Handler to update delivery status
      const handleStatusChange = (event) => {
        setOrder({ ...order, deliveryStatus: event.target.value });
      };
  return (
    <div className="p-6 max-w-4xl mx-auto bg-light-black rounded-lg shadow-lg flex flex-col">
    <h1 className="text-2xl font-bold mb-4">Order Details</h1>
    <div className="mb-4">
      <div className="text-lg font-semibold">Order ID:</div>
      <p>{order.orderId}</p>
    </div>
    <div className="mb-4">
      <div className="text-lg font-semibold">Customer Name:</div>
      <p>{order.customerName}</p>
    </div>
    <div className="mb-4">
      <div className="text-lg font-semibold">Address:</div>
      <p>{order.address}</p>
    </div>
    <div className="mb-4">
      <div className="text-lg font-semibold">Items:</div>
      <ul className="list-disc pl-5">
        {order.items.map((item, index) => (
          <li key={index} className="flex items-center mb-2">
            <img src={item.imageUrl} alt={item.name} className="w-16 h-16 object-cover rounded mr-4" />
            <div>
              <div className="font-semibold">{item.name}</div>
              <div>Quantity: {item.quantity}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
    <div className="mb-4">
      <div className="text-lg bg-light-black font-semibold">Total Amount:</div>
      <p>{order.totalAmount}</p>
    </div>
    <div className="mb-4">
      <div className="text-lg font-semibold">Delivery Status:</div>
      <select
        value={order.deliveryStatus}
        onChange={handleStatusChange}
        className="mt-1 p-2 border rounded bg-black"
      >
        <option  className='bg-light-black text-white' value="Pending">Pending</option>
        <option className='bg-light-black text-white' value="Shipped">Shipped</option>
        <option className='bg-light-black text-white' value="Delivered">Delivered</option>
        <option className='bg-light-black text-white'value="Cancelled">Cancelled</option>
      </select>
    </div>
    <button className="bg-yellow-400 text-white p-2 rounded hover:bg-blue-600">
      Update Status
    </button>
  </div>
  )
}

export default Vieworder