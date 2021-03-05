import React from 'react';
// import Quiz from './quiz/Quiz';
import Header from './header/Header';
import FnaSidebar from './sidebar/FnaSidebar';
import HouseholdForm from './household/HouseholdForm';


function App() {
  return (
   <React.Fragment>
    <Header />
      <div id="parentContainer" >
      <FnaSidebar />
         <div id='formHolder'>
            {/* <Quiz /> */}
            <HouseholdForm />
        </ div>
      </ div>
      {/* <div className='quizBlock'>
 
      </div> */}
    </React.Fragment>
  );
}

export default App;
