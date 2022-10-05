import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import './Toast.css'

const Toast = () => {
    const notification = () => toast("Wow so easy !");

    return (
      <div>
        <button className='activity' onClick={notification}>Completed Activity!</button>
        <ToastContainer />
      </div>
 
    );
};

export default Toast;