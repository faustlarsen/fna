import React from 'react';
import './aum.css';


function Aum() {
return (  
  < React.Fragment>
    <div id='aumTitle'>
      <h2>ASSETS UNDER MANAGEMENT</h2>
      <h3>Goal: $20 million AUM</h3>
    </div>
  
    <div className="thermomemtet">
      <div className="goal" id="goal">
        <small>GOAL</small>
      </div>
    </div>
    <div className='aumButton'>
     <button>ADD</button>
    </div>
  </ React.Fragment>
  );
}

export default Aum;


