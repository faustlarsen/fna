import React from 'react';
import './household.css';


function HouseholdForm() {
return (  
  < React.Fragment>
    {/* <div id="parentContainer" > */}
      {/* <div id='formHolder'> */}
 
       <div id='houseHold-mainForm'>
       <h2>Household Information</h2>
       <form>
        <p>Client A</p>
        <input
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        <input
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        <input
          id="phone"
          class="form-field"
          type="tel"
          placeholder="Phone 1234567890"
          name="phone"
        />
        <input
          id="dob"
          class="form-field"
          type="date"
          placeholder="DOB"
          name="dob"
        />
      </form>
      <br></br>
      <br></br>
      <form>
        <p>Client B</p>
        <input
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        <input
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        <input
          id="phone"
          class="form-field"
          type="tel"
          placeholder="Phone 1234567890"
          name="phone"
        />
        <input
          id="dob"
          class="form-field"
          type="date"
          placeholder="DOB"
          name="dob"
        />
      </form>
      <br></br>
      <br></br>
      <form>
        <p>Dependents</p>
        <input
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        <input
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
        <input
          id="dob"
          class="form-field"
          type="date"
          placeholder="DOB"
          name="dob"
        />
      </form>
      <a href="/Add" >Add a dependent</a>
      </div>
      <div type='button' className='formButton'>
         <button>Next</button>
      </div>
      {/* </div> */}
    {/* </div> */}
  </ React.Fragment>
  );
}

export default HouseholdForm;


