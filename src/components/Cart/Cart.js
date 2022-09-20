import React from 'react';
import './Cart.css';

const Cart = (props) => {
    //console.log(props.cart);
    const cart = props.cart;

    let total = cart.reduce((total, prc)=> total + prc.price ,0);
    const discount = total/5;

    return (
        <div>
             <div className="cart">
                <h5  className="text-center">Course Order Summary</h5>
                <p>Course Items Add: {props.cart.length}</p>
                <p>Price: {total}</p>
                <p>Less 5% Discount: {discount}</p>
                <p>Total Price: {total - discount}</p>
            </div>
        </div>
    );
};

export default Cart;