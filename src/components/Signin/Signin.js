import React from "react";
import './signin.css';
import firebase from 'firebase/app';
// import styled from 'styled-components';

function Signin(){  


  function doSignUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function(){
        console.log("successfully signed up!");
      })
      .catch(function(error) {
      console.log(error.message);
    });
  }

  return (
    <React.Fragment>
      <div className="signInParent">
        <div className="signInChild">
          <h1>Sign Up</h1>
          <form onSubmit={doSignUp}>
            <input
              type='text'
              name='email'
              placeholder='Email'
              class='form-control-email' 
              />
              <br />
            <input
              type='password'
              name='password'
              placeholder='Password' 
              class='form-control-pass' 
            />
            <button class='signButton' type='submit'>Sign Up</button>
           </form>
        </div>
      </div>

  </React.Fragment>
  );
}

export default Signin;