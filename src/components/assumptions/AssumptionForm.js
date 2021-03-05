import React from 'react';
import './assumptions.css';

function AssumptionForm() {
return (  
  < React.Fragment>
    {/* <div id="parentContainer" > */}
      {/* <div id='formHolder'> */}
       <div id='assumptions-mainForm'>
       <h2>Assumptions</h2>
       <h4>Assumed Return on Revenue on Assets</h4>
       <label>During Retirement</label>
        <input
          id="assumptions"
          class="form-field"
          type="text"
          placeholder="%"
          name="assumptions"
        />
          <br></br>
          <br></br>
          <label>Pre-Retirement</label>
          <input
            id="assumptions"
            class="form-field"
            type="text"
            placeholder="%"
            name="assumptions"
        />
          <br></br>
          <br></br>
          <label>Inflation Rate</label>
          <input
            id="assumptions"
            class="form-field"
            type="text"
            placeholder="%"
            name="assumptions"
        />
          <br></br>
          <br></br>
          <label>Social Security Annual Increase Rate</label>
          <input
            id="assumptions"
            class="form-field"
            type="text"
            placeholder="%"
            name="assumptions"
        />
          <br></br>
          <br></br>
          <label>Months of Emergency Fund</label>
          <input
            id="assumptions"
            class="form-field"
            type="text"
            placeholder="$"
            name="assumptions"
        />
          <br></br>
          <br></br>
          <label>Years of Survivor Income</label>
          <input
            id="assumptions"
            class="form-field"
            type="text"
            placeholder="$"
            name="assumptions"
        />
      </div>
      <div type='button' className='formButton'>
         <button>Next</button>
      </div>
      {/* </div> */}
    {/* </div> */}
  </ React.Fragment>
  );
}

export default AssumptionForm;


