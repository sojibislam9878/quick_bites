// pages/delivery.js
import { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3000');

export default function DeliveryPage() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        // Listen for new orders from the backend
        socket.on('new-order', (order) => {
            setOrders((prevOrders) => [...prevOrders, order]);
        });

        // Listen for order acceptance and update orders list
        socket.on('update-orders', (updatedOrders) => {
            setOrders(updatedOrders); // Update the order list to reflect current state
        });

        return () => {
            socket.off('new-order');
            socket.off('update-orders');
        };
    }, []);

    const acceptOrder = async (orderId) => {
        const response = await fetch('http://localhost:3000/accept-order', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ orderId, deliveryPersonId: 'delivery123' }),
        });

        const result = await response.json();
        if (result.message === 'Order accepted') {
            alert('Order accepted');
        }
    };

    return (
        <div>
            <h1>Delivery Dashboard</h1>
            {orders.length === 0 && <p>No new orders</p>}
            <div>
                {orders.map((order) => (
                    <div key={order._id}>
                        <p>Order ID: {order._id}</p>
                        <p>Items: {order.items.join(', ')}</p>
                        <button onClick={() => acceptOrder(order._id)}>
                            Accept Order
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
