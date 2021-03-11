import React from 'react';
import Header from './header/Header';
import Home from './home/Home';
import FnaSidebar from './sidebar/FnaSidebar';
import Quiz from './quiz/Quiz';
import HouseholdForm from './household/HouseholdForm';
import AssumptionForm from './assumptions/AssumptionForm';
import GoalsForm from './goals/GoalsForm';
import CashIncome from './cashIncome/CashIncome';
import CashExpenses from './cashExpenses/CashExpenses';
import CashSummary from './cashSummary/CashSummary';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signin from "./Signin/Signin";

function App() {
  return (
  <React.Fragment>
    <Router>
      <Header />
        <Switch>
          <div id="parentContainer" >
            <FnaSidebar />

              <div id='formHolder'>

              <Route path="/home">
                  <Home />
              </Route>

              <Route path="/household">
                  <HouseholdForm />
                </Route>

                <Route path="/assumptions">
                  <AssumptionForm />
                </Route>

                <Route path="/goals">
                  <GoalsForm />
                </Route>

                <Route path="/CashIncome">
                  <CashIncome />
                </Route>

                <Route path="/CashExpenses">
                  <CashExpenses />
                </Route>

                <Route path="/CashSummary">
                  <CashSummary />
                </Route>

                <Route path="/quiz">
                <div id='quizTitle'>
                  <h1>ARE YOU FINANCIALLY LITERATE ? </h1>
                  <h3>76% of people can't answer 4 out of 5 questions. Can you?</h3>
                </ div>
                  <Quiz />
                </Route>

                <Route path="/signin">
                  <Signin />
                </Route>
              </ div>
          </ div>
        </Switch>
    </Router>
  </React.Fragment>
  );
}

export default App;
