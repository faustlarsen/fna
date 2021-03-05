import React from "react";

let styles = {
  marginRight: '355px',
   };
   
function Navbar () {
 
  return (
    <section className="navbar">
      <h3 style={styles} className="navbar-item">Financial Needs Analysis</h3>
      <a href="/" className="navbar-item">Home</a>
      <a href="/about" className="navbar-item">About</a>
      <a href="/quiz" className="navbar-item">Quiz</a>
      <a href="/tips" className="navbar-item">Tips</a>
      <a href="/contact" className="navbar-item">Contact</a>
      <a href="/signin" className="navbar-item">Signin</a>
      <a href="/login" className="navbar-item">Login</a>
    </section>
  )
}

export default Navbar;