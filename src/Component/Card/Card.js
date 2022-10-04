import React from 'react';
import images from '../../images/images (5).jpg'
import './Card.css'

const Card = (props) => {
    
//   const{card}=props;
//   console.log(card)
//   let total=0;
//   let id=0;
//   for(const product of card){
//     total=total + product.time
//     id=product.id
  
//   }
  const card = props.card;
  //const total = cart.reduce( (total, prd) => total + prd.price , 0 )
  let total = 0;
  for(let i = 0; i< card.length; i++){
      const product = card[i];
      total = total + product.time;
  }
  
  
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
            <p>select:{card.length} </p>
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
                <button className='break-time'>10s</button>
                <button className='break-time'>20s</button>
                <button className='break-time'>30s</button>
                <button className='break-time'>40s</button>
            </div>
            <p>Exercise Details</p>
            <div className="input-field">
        <p>Exercise Time  </p>
           <p>{total} </p>
        
                
            </div>
            <div className="input-field">
                <p>Break Time</p>
                <p> </p>
                
            </div>
        
           
            
            <button className="activity">
                Completed Activity
            </button>
            
        </div>
       
      </div>
    );
};

export default Card;