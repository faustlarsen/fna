import React from 'react';
import './cashExpenses.css';
import { Link } from "react-router-dom";

function CashExpenses() {
return (  
  < React.Fragment>
    {/* <div id="parentContainer" > */}
      {/* <div id='formHolder'> */}
      <div class='cashTitle'>
        <h2>CASH FLOW</h2>
      </div>

      <div id='cash-categories'>
        <div id='cash-title1'>
          <Link to="/CashIncome" className="cash-navbar-item">Income</Link>
        </div>
        <div id='cash-title2'>
        <Link to="/CashExpenses" className="cash-navbar-item">Expenses</Link>
        </div>
        <div id='cash-title3'>
        <Link to="/CashSummary" className="cash-navbar-item">Summary</Link>
        </div>
      </div>
      </ React.Fragment>
  );
}

export default CashExpenses;