import React from 'react';
import './cashIncome.css';
import { Link } from "react-router-dom";

function CashIncome() {
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

      {/* <h4>Regular Income</h4> */}

      <div class='regularIncome'>
        <h4>Regular Income</h4>
      </div>

      <a href="/Add" >Add an income</a>
     
      <div id='cash-form1'>
        <div id='cash-titles1'>
          <p>Owner</p>
        </div>
        <div id='cash-titles2'>
          <p>Recipient Source</p>
        </div>
        <div id='cash-titles3'>
          <p>Gross Amount</p>
        </div>
        <div id='cash-titles4'>
          <p>Frequency</p>
        </div>
      </div>

      <div id='cash-form2'>
        <div id='cash-props1'>
          <select class='dropdown1'>
            <option value="clientA">Client A</option>
            <option value="clientB">Client B</option>
          </select>
        </div>
        <div id='cash-props2'>
          <input
            id="source"
            class="cash-form-field1"
            type="text"
            placeholder="Source"
            name="source"
          />
        </div>
        <div id='cash-props3'>
          <input
            id="gross"
            class="cash-form-field2"
            type="text"
            placeholder="$"
            name="gross"
          />
        </div>
        <div id='cash-props4'>
          <select class='dropdown2'>
            <option value="frequency">Annual x1</option>
            <option value="frequency">Monthly x12</option>
            <option value="frequency">Semi-Monthly x24</option>
            <option value="frequency">Bi-Weekly x26</option>
            <option value="frequency">Weekly x52</option>
          </select>
        </div>
        <div id='cash-props5'>
          <div type='button' className='cashButton'>
            <button>Save</button>
          </div>
        </div>
        <div id='cash-props5'>
          <div type='button' className='cashButton'>
            <button>Close</button>
          </div>
        </div>
      </div>

      <div id='cash-form-output'>
        <div id='cash-titles1'>
          <p>Owner</p>
          <p>_____</p>
        </div>
        <div id='cash-titles2'>
          <p>Recipient Source</p>
          <p>_____</p>   
        </div>
        <div id='cash-titles3'>
          <p>Gross Amount</p>
          <p>_____</p>
        </div>
        <div id='cash-titles4'>
          <p>Frequency</p>
          <p>_____</p>
        </div>
        <div id='cash-titles4'>
          <p>Edit</p>
          <p>Delete</p>
        </div>
      </div>
      {/* instead of ______ will require ${} to output proper results */}

        <br></br>

      <h4>Income Taxes</h4>
      <div id='taxes-form-output-main'>
      <div id='taxes-form-output'>
      <label>Current estimated combined tax rate</label>
        <input
          id="combinedTax"
          class="tax-form-field1"
          type="text"
          placeholder="%"
          name="combinedTax"
          />
      </div>

      <br></br>

      <div id='taxes-form-output'>
        <label>Did you receive a tax refund last filing?</label>
          <select class='dropdown2'>
            <option value="yes">Yes</option>  
              {/* if YES refund should pop-up */}
            <option value="no">No</option>
          </select>
      </div>
      <div id='taxes-form-output'>
       <label>Refund Amount</label>
        <input
          id="refund"
          class="tax-form-field2"
          type="text"
          placeholder="$"
          name="refund"
        />
       </div>

        <br></br>

      <div id='taxes-form-output'>
        <label>Did you have to pay taxes at your last filing?</label>
          <select class='dropdown2'>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
      </div>
      <div id='taxes-form-output'>
        <label>Payment Amount</label>
          <input
            id="refund"
            class="tax-form-field3"
            type="text"
            placeholder="$"
            name="refund"
          />
      </div>
      </div>
      <div type='button' className='formButton'>
         <button>Next</button>
      </div>
      {/* </div> */}
    {/* </div> */}
  </ React.Fragment>
  );
}

export default CashIncome;
