import React from 'react';
import Header from './header/Header';
import FnaSidebar from './sidebar/FnaSidebar';
// import Quiz from './quiz/Quiz';
// import HouseholdForm from './household/HouseholdForm';
// import AssumptionForm from './assumptions/AssumptionForm';
// import GoalsForm from './goals/GoalsForm';
import CashIncome from './cashflow/CashIncome';

function App() {
  return (
   <React.Fragment>
    <Header />
      <div id="parentContainer" >
      <FnaSidebar />
         <div id='formHolder'>
            {/* <Quiz /> */}
            {/* <HouseholdForm /> */}
            {/* <AssumptionForm /> */}
            {/* <GoalsForm /> */}
            <CashIncome />
        </ div>
      </ div>
      {/* <div className='quizBlock'>
 
      </div> */}
    </React.Fragment>
  );
}

export default App;
