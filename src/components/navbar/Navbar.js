import React from "react";
import { Link } from "react-router-dom";
import './navbar.css';
import firebase from 'firebase/app';

let styles = {
  marginRight: '355px',
};
   
function Navbar () {

  function doSignOut() {
    firebase.auth()
    .signOut()
    .then(function() {
      console.log("Successfully signed out!");
    })
    .catch(function(error) {
    });
  }
 
  return (
    <section className="navbar">
      <h3 style={styles} className="navbar-item">Financial Needs Analysis</h3>
      <Link to="/home" className="navbar-item">Home</Link>
      <Link to="/about" className="navbar-item">About</Link>
      <Link to="/quiz" className="navbar-item">Quiz</Link>
      <Link to="/tips" className="navbar-item">Tips</Link>
      <Link to="/contact" className="navbar-item">Contact</Link>
      <Link to="/signin" className="navbar-item">SignIn</Link>
      <Link onClick={doSignOut} to="/home" className="navbar-item-out">Sign Out</Link>
    </section>
  )
}


export default Navbar;




