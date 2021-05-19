import React from 'react';

const ReviewItem = (props) => {
    const {name,quantity}=props.product;
    const reviewStyle={
        borderBottom:'1px solid lightgray',
        paddingBottom:'10px',
    }
    return (
        <div style={reviewStyle}>
            <h2 className="product-name">{name}</h2>
            <p>Quantity: {quantity}</p>
        </div>
    );
};

export default ReviewItem;