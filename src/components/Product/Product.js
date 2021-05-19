import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';
const Product = (props) => {

const {name,img,price,stock,seller,key}=props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="Product Iamge" />
            </div>
            <div className="product-details">
                <h4 className="product-name"><Link to={"/product/"+key}>{name}</Link></h4>
                <p><small>By: {seller}</small></p> <br />
                <p>Price: ${price}</p> <br />
                <p><small>Only {stock} left on available product soon</small></p>
             { props.showAddToCart &&   <button onClick={()=>props.handleAdProduct(props.product)} className="main-btn">Add To Cart</button>}
            </div>
        </div>
    );
};

export default Product;