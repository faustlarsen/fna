import React from 'react';
import Header from './header/Header';
import FnaSidebar from './sidebar/FnaSidebar';
// import Quiz from './quiz/Quiz';
// import HouseholdForm from './household/HouseholdForm';
import AssumptionForm from './assumptions/AssumptionForm';

function App() {
  return (
   <React.Fragment>
    <Header />
      <div id="parentContainer" >
      <FnaSidebar />
         <div id='formHolder'>
            {/* <Quiz /> */}
            {/* <HouseholdForm /> */}
            <AssumptionForm />
        </ div>
      </ div>
      {/* <div className='quizBlock'>
 
      </div> */}
    </React.Fragment>
  );
}

export default App;
