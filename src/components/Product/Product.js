import React from 'react';
import './Product.css';
const Product = (props) => {
const {name,img,price,stock,seller}=props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="Product Iamge" />
            </div>
            <div className="product-details">
                <h4>{name}</h4>
                <p><small>By: {seller}</small></p> <br />
                <p>Price: ${price}</p> <br />
                <p><small>Only {stock} left on available product soon</small></p>
                <button onClick={()=>props.handleAdProduct(props.product)} className="main-btn">Add To Cart</button>
            </div>
        </div>
    );
};

export default Product;