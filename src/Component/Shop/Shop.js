import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import images from '../../images/1837.png';

import './Shop.css';
import Card from '../Card/Card';
import Blog from '../Blog/Blog';






const Shop = () => {
    const [products, setProducts] = useState([]);
    const [card,setCard]=useState([]);

    useEffect(() => {
        fetch('product.json')
        .then(res=>res.json())
        .then(data=> setProducts(data))
    }, [])

    const handleAddCard=(product)=>{
      
      const newCard=[...card, product]
      setCard(newCard);
  
    }
    return (
       <div>
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


   <Card card ={card}></Card>

  </div>
  <Blog></Blog>
 </div>
        
    );
};

export default Shop;