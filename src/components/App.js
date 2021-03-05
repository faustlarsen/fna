import React from 'react';
// import Quiz from './Quiz';
import Header from './Header';
import FnaSidebar from './FnaSidebar';


function App() {
  return (
   <React.Fragment>
    <Header />
      <div id="parentContainer" >
      <FnaSidebar />
         <div id='formHolder'>
            {/* <Quiz /> */}

        </ div>
      </ div>
      {/* <div className='quizBlock'>
 
      </div> */}
    </React.Fragment>
  );
}

export default App;
