import React from 'react';


const Cart = (props) => {
 const cart = props.cart;
 console.log(cart)
let total = 0;
    // const total =cart.reduce((total,prd)=>total+prd.price,0);
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total=total+product.price*product.quantity;
    }
    let tax = total/10;
    let shipping = 0;
    if (total>35) {
        shipping=0;
    }
    else if(total>15){
        shipping = 4.99
    }
    else if(total>0){
    shipping=12.99;
    }
    const formatNumber =(num)=>{
        const precision = num.toFixed(2);
        return Number(precision)
    }
    const grandTotal = (total + shipping+ Number(tax)).toFixed(2);
    return (
        <div>
            <h2>Order Summary</h2>
            <h4>Items Ordered: {cart.length}</h4>
            <p>Product Price: {formatNumber(total)}</p>
            <p><small>Shipping: {shipping}</small></p>
            <p><small>Tax+Vat: {formatNumber(tax)}</small></p>
            <p>Total Price: {grandTotal}</p>
                 {
                    props.children
                }
        </div>
    );
};

export default Cart;