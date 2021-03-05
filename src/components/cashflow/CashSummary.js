import React from 'react';
import './cashSummary.css';


function CashSummary() {
return (  
  < React.Fragment>
    {/* <div id="parentContainer" > */}
      {/* <div id='formHolder'> */}
      <div class='cashTitle'>
        <h2>Cash Flow</h2>
      </div>

      <div id='cash-categories'>
        <div id='cash-title1'>
          <h4>Income</h4>
        </div>
        <div id='cash-title2'>
          <h4>Expenses</h4>
        </div>
        <div id='cash-title3'>
          <h4>Summary</h4>
        </div>
      </div>

      </ React.Fragment>
  );
}

export default CashSummary;