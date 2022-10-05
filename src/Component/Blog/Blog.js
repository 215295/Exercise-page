import React from 'react';
import './Blog.css'

const Blog = () => {
    return  (
      <div className="blog-container ">
          <div className="header ">
            <h1 >Questions and Answers</h1>
          </div>
        <div className="blog-section ">
            <h4>
               1. How does React works?
            </h4>
            <p>React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. React goes through its virtual DOM ,creates a list of those changes that need to be made to the actual DOM and then does it all in one single process. React reads these objects and uses them to create HTML elements on the virtual DOM, after which it gets synced with the real DOM. </p>
            
        </div>
        <div className="blog-section ">
            <h4>
               2.Difference between props and state ?
            </h4>
            <p><strong>Props :</strong> Props are used to pass data from one component to another and Props can be used with state and functional components.</p>
              <p><strong>State :</strong> The state is a local data storage that is local to the component only and cannot be passed to other components and State can be used only with the state components/class component.</p>
            
        </div>
        <div className="blog-section ">
            <h4>
               3.What is the use of useEffect in react without fatching data?
            </h4>
            <div className="">
              <ul>
                <li>1. Running on state change: Validating input field</li>
                <li>2. Running on state change: Live filtering.</li>
                <li>3. Running on state change: Trigger animation on new array value</li>
                <li>4. Running on props change: Update paragraph list on fetched API data update.</li>
                <li>5. Running on props change: Updating fetched API data to get BTC updated price.</li>
              </ul>
            </div>
            
        </div>
      </div>

      
        
            
           
        
      );
};

export default Blog;