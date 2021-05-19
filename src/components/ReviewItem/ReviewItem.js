import React from 'react';

const ReviewItem = (props) => {
    const {name,quantity,key,price}=props.product;
    const reviewStyle={
        borderBottom:'1px solid lightgray',
        paddingBottom:'10px',
    }
    return (
        <div style={reviewStyle}>
                    <h2 className="product-name">{name}</h2>
                    <p>Quantity: {quantity}</p>
                    <p>Price: {price}</p>
                    <button onClick={()=>props.romeoveProduct(key)} className="main-btn">Remove Product</button>
        </div>
    );
};

export default ReviewItem;