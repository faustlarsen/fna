import React from 'react';
import Header from './header/Header';
import FnaSidebar from './sidebar/FnaSidebar';
import Quiz from './quiz/Quiz';
// import HouseholdForm from './household/HouseholdForm';
// import AssumptionForm from './assumptions/AssumptionForm';
// import GoalsForm from './goals/GoalsForm';
// import CashIncome from './cashflow/CashIncome';
// import CashExpenses from './cashflow/CashExpenses';
// import CashSummary from './cashflow/CashSummary';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signin from "./Signin";


function App() {
  return (
  <React.Fragment>
    <Router>
      <Header />
        <Switch>
          <div id="parentContainer" >
            <FnaSidebar />

              <div id='formHolder'>

                <Route path="/quiz">
                  <Quiz />
                </Route>
          
                <Route path="/signin">
                  <Signin />
                </Route>


   
            {/* <HouseholdForm /> */}
            {/* <AssumptionForm /> */}
            {/* <GoalsForm /> */}
            {/* <CashIncome /> */}
            {/* <CashExpenses /> */}
            {/* <CashSummary /> */}
              </ div>
          </ div>
        </Switch>
    </Router>
  </React.Fragment>
  );
}

export default App;
