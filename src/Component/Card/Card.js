import React, { useState } from 'react';



import images from '../../images/images (5).jpg'
import { addToDb } from '../../utilities/fakedb';
import Toast from '../Toast/Toast';



import './Card.css'

const Card = (props) => {
    

  const card = props.card;
  //const total = cart.reduce( (total, prd) => total + prd.price , 0 )
  let total = 0;
  for(let i = 0; i< card.length; i++){
      const product = card[i];
      total = total + product.time;
  }
 
const [breakTime, setBreakTime]= useState(0);

let breakTimeTotal = (value) => {
   addToDb(value)
    let sum = value;
    setBreakTime(sum);
    
  };
    return (
      <div className="card">
        <div className="card-container">
            <div className='profile'>
               <p><img src={images} alt="" /></p>
               <div className='address'>
                  <h4>Sumon </h4>
                  <p>Bangladesh</p>
               </div>
            </div>
            
            <div className="bio-data">
                <div className='bio'>
                    <h5>56 kg</h5>
                    <p>Weight</p>
                </div>
                <div className='bio'>
                    <h5>5.6</h5>
                    <p>Height</p>
                </div>
                <div className='bio'>
                    <h5>30 yr</h5>
                    <p>Age</p>
                </div>
            </div>
            <p>Add A Break</p>
            <div className="break-container">
        <button onClick={()=>breakTimeTotal(10)}  className='break-time'>10s</button>
        <button onClick={()=>breakTimeTotal(20)} className='break-time'>20s</button>
        <button onClick={()=>breakTimeTotal(30)} className='break-time'>30s</button>
        <button onClick={()=>breakTimeTotal(40)} className='break-time'>40s</button>
    </div>
            <p>Exercise Details</p>
            <div className="input-field">
        <p>Exercise Time  </p>
           <p>{total}m </p>
        
                
            </div>
            <div className="input-field">
                <p>Break Time</p>
                <p>{breakTime} m</p>
                
            </div>
         
            <Toast></Toast>
            
        </div>
       
      </div>
    );
};

export default Card;
//ewertewtwtg