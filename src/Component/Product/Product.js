import React from 'react';
import './Product.css';

const Product = (props) => {
    console.log(props.product)
    const {name,id,image,time,age,para}=props.product;
    return (
        <div className='product'>
            <img src={image} alt="" />
            <div className='product-info'>
              <h2 className='product-name'>{name}</h2>
              <p><small>{para}</small></p>
              <h5>For Age : {age}yr </h5>
              <h5>Time  Duration : {time}m </h5>
             
            </div>
            <button onClick={()=> props.handleAddCard(props.product)} className='btn-card'> 
                <p>Add to list</p>
            </button>


        </div>
    );
};

export default Product;