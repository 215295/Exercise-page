import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import images from '../../images/1837.png';

import './Shop.css';
import Card from '../Card/Card';





const Shop = () => {
    const [products, setProducts] = useState([]);
    const [card,setCard]=useState([]);

    useEffect(() => {
        fetch('product.json')
        .then(res=>res.json())
        .then(data=> setProducts(data))
    }, [])

    const handleAddCard=()=>{
      console.log(products)
      const newCard=[...card, products]
      setCard(newCard);

    }
    return (
        <div className='shop-container'>

           <div >
            <div className='header-container'>
                <div className='header-icon'>
                  <p><img src={images} alt="" /></p>
                  <h1>Different Style of Jogging</h1>
                  </div>
            <h3>Select Today's Jogging Style</h3>
            </div>
              <div className='product-container'>
              {
                products.map(product=><Product
                    
                   
                    product={product}
                    handleAddCard={handleAddCard}
                ></Product>)
              }
              </div>
        
              
           </div>
           
              
             
              <Card></Card>
              <p> select item:{card.length} </p>
           
        </div>
    );
};

export default Shop;