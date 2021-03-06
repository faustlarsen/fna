import React from "react";
import { Link } from "react-router-dom";

let styles = {
  marginRight: '355px',
   };
   
function Navbar () {
 
  return (
    <section className="navbar">
      <h3 style={styles} className="navbar-item">Financial Needs Analysis</h3>

      <Link to="/" className="navbar-item">Home</Link>
      <Link to="/about" className="navbar-item">About</Link>
      <Link to="/quiz" className="navbar-item">Quiz</Link>
      <Link to="/tips" className="navbar-item">Tips</Link>
      <Link to="/contact" className="navbar-item">Contact</Link>
      <Link to="/signin" className="navbar-item">SignIn</Link>
      
    </section>
  )
}

export default Navbar;