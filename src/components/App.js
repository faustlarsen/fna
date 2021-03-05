import React from 'react';
import Quiz from './Quiz';
import Header from './Header';


function App() {
  return (
   <React.Fragment>
    <Header />
      <div id="parentContainer" >
  
         <div id='formHolder'>
            <Quiz />

        </ div>
      </ div>
      {/* <div className='quizBlock'>
 
      </div> */}
    </React.Fragment>
  );
}

export default App;
