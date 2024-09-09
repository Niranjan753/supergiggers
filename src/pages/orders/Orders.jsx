import React, { useState } from 'react';
import './Orders.scss';

const Orders = () => {
  const [showCheckout, setShowCheckout] = useState(false);
  const [currentOrder, setCurrentOrder] = useState(null);

  const currentUser = {
    isSeller: false // or true, depending on your use case
  };

  const orders = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Stunning concept art",
      price: 59.99,
      buyer: "John Doe",
      seller: "Anna Smith",
      deliveryDate: "2023-07-15",
      status: "Completed"
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "AI-generated website design",
      price: 79.99,
      buyer: "Jane Smith",
      seller: "Mike Johnson",
      deliveryDate: "2023-07-20",
      status: "In Progress"
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/8797307/pexels-photo-8797307.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Professional logo design",
      price: 89.99,
      buyer: "Alex Brown",
      seller: "Sarah Lee",
      deliveryDate: "2023-07-25",
      status: "Pending"
    }

  ];

  const handleCheckout = (order) => {
    setCurrentOrder(order);
    setShowCheckout(true);
  };

  const handlePaymentSuccess = () => {
    setShowCheckout(false);
    window.alert('Payment successful! (This is a parody, no actual payment was processed)');
  };

  const ParodyCheckoutForm = ({ order, onSuccess }) => {
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        onSuccess();
      }, 2000);
    };

    return (
      <form onSubmit={handleSubmit} className="parody-checkout-form">
        <button type="button" className="pay-with-link">
          Pay with link ⇒
        </button>
        <div className="or-separator">Or pay with card</div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Email" required />
        </div>
        <div className="form-group">
          <label htmlFor="card-number">Card information</label>
          <input type="text" id="card-number" placeholder="1234 1234 1234 1234" required />
          <div className="card-details">
            <input type="text" placeholder="MM / YY" required />
            <input type="text" placeholder="CVC" required />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="cardholder-name">Cardholder name</label>
          <input type="text" id="cardholder-name" placeholder="Full name on card" required />
        </div>
        <div className="form-group">
          <label htmlFor="country">Country or region</label>
          <select id="country" required>
            <option value="Romania">Romania</option>
            {/* Add more countries as needed */}
          </select>
        </div>
        <div className="save-info">
          <input type="checkbox" id="save-info" />
          <label htmlFor="save-info">
            Securely save my information for 1-click checkout
          </label>
          <p>Pay faster on 123FormBuilder and everywhere Link is accepted.</p>
        </div>
        <button type="submit" className="pay-button" disabled={loading}>
          {loading ? 'Processing...' : `Pay $${order.price}`}
        </button>
      </form>
    );
  };

  return (
    <div className="orders">
      <h1>Orders</h1>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>{currentUser.isSeller ? "Buyer" : "Seller"}</th>
            <th>Contact</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>
                <img
                  className="image"
                  src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
              </td>
              <td>{order.title}</td>
              <td>${order.price}</td>
              <td>{order.client}</td>
              <td>
                <img className="message" src="/img/message.png" alt="" />
              </td>
              <td>
                <button onClick={() => handleCheckout(order)} className="checkout-button">
                  Checkout
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showCheckout && currentOrder && (
        <div className="checkout-modal">
          <div className="checkout-content">
            <button onClick={() => setShowCheckout(false)} className="close-button">×</button>
            <h3>Checkout</h3>
            <ParodyCheckoutForm order={currentOrder} onSuccess={handlePaymentSuccess} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;
