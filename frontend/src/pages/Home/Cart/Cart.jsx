import React, { useState } from 'react';
import { useContext } from 'react';
import { StoreContext } from '../../../Context/StoreContext';
import './Cart.css';
import { useNavigate } from 'react-router-dom';
import ChatWindow from './ChatWindow';

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount,url } = useContext(StoreContext);
  const navigate = useNavigate();
  const [showChat, setShowChat] = useState(false); // State to toggle chat window

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div className="cart-items-title cart-items-item" key={index}>
                <img src={url+"/images/"+item.image} alt="" />
                <p>{item.name}</p>
                <p>₹{item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>₹{item.price * cartItems[item._id]}</p>
                <p onClick={() => removeFromCart(item._id)} className='cross'>x</p>
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>₹{getTotalCartAmount() === 0 ? 0 : 49}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Total</p>
              <p>₹{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 49}</p>
            </div>
            <hr />
          </div>
          <button onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
          <button onClick={() => setShowChat(true)}>AI Assistant</button>
        </div>
      </div>

      {/* Chat Window */}
      <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>
      {showChat && <ChatWindow cartItems={cartItems} foodList={food_list} onClose={() => setShowChat(false)} />}
    </div>
  );
};

export default Cart;