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

  // function doSignIn(event) {
  //   event.preventDefault();
  //   const email = event.target.signinEmail.value;
  //   const password = event.target.signinPassword.value;
  //   firebase.auth()
  //     .signInWithEmailAndPassword(email, password)
  //     .then(function() {
  //     console.log("Successfully signed in!");
  //     })
  //     .catch(function(error) {
  //       console.log(error.message);
  //   });
  // }
  
  // function doSignOut() {
  //   firebase.auth()
  //   .signOut()
  //   .then(function() {
  //     console.log("Successfully signed out!");
  //   })
  //   .catch(function(error) {
  //     console.log(error.message);
  //   });
  // }
  
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

      {/* <form onSubmit={doSignIn}>
      <div className="signInParent">
        <div className="signInChild">
          <h1>Sign In</h1> <br />
          <form id='signupForm'>
            <input 
              name='signinEmail' 
              type='text' 
              placeholder='Email' 
              class='form-control-email' 
            /> 
            <br /><br />
            <input 
              name='signinPassword' 
              type='text' 
              placeholder='Password' 
              class='form-control-pass' 
            /> 
            <br /><br />
            <button class='signButton' type='submit'>Sign In</button>
          </form>
        </div>
      </div>
      </form> */}

        {/* <div className="signInChild">
          <h1>Sign Out</h1>
          <button onClick={doSignOut} class='signButton' type='submit'>Sign Out</button>
        </div> */}

  </React.Fragment>
  );
}

export default Signin;






// import React from "react";
// import './signin.css';
// import firebase from 'firebase/app'

// function Signin(){  

  
//   return (
//     <React.Fragment>
//       <div className="signInParent">
//         <div className="signInChild">
//           <h1>Sign In</h1> <br />
//           <form id='signupForm'>
//             <input name='signupEmail' type='text' placeholder='Email' class='form-control-email' /> <br /><br />
//             <input name='signupPassword' type='text' placeholder='Password' class='form-control-pass' /> <br /><br />
//             <button class='signButton' type='submit'>Sign In</button>
//           </form>
//         </div>
//       </div>
//   </React.Fragment>
//   );
// }
// export default Signin;
