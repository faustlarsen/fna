import React from "react";

function Signin(){  
  return (
    <React.Fragment>
      <div className="signInParent">
        <div className="signInChild">
          <h1>Sign In</h1> <br />
          <form id='signupForm'>
            <input name='signupEmail' type='text' placeholder='Email' class='form-control-email' /> <br /><br />
            <input name='signupPassword' type='text' placeholder='Password' class='form-control-pass' /> <br /><br />
            <button class='signButton' type='submit'>Sign In</button>
          </form>
        </div>
      </div>
  </React.Fragment>
  );
}

export default Signin;