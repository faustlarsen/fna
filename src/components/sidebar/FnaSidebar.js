import React from 'react';
import './sidebar.css';
 

  function FnaSidebar() {
  return (
  <React.Fragment>
    {/* <div id="parentContainer"> */}
      <div id="navFNABG">
      <ul id="navFNA">
        
          <div class="FNATitle1">
            <div class="FNANavItemBG"><p>Household Information</p>
              <a id="Household" class="navigation_link"></a>
            </div>
          </div>
        
            <div class="FNATitle2">
              <div class="FNANavItemBG"><p>Assumptions</p>
                <a id="Assumptions"  class="navigation_link"></a>
              </div>
            </div>
     
         
            <div class="FNATitle3">
              <div class="FNANavItemBG"><p>Goals and Dreams</p>
                <a id="Goals"  class="navigation_link"></a>
              </div>
            </div>
       
            <div class="FNATitle4">
              <div class="FNANavItemBG"><p>Cash Flow</p>
                <a id="Cashflow"  class="navigation_link"></a>
              </div>
            </div>
     
   
            <div class="FNATitle8">
              <div class="FNANavItemBG"><p>Debt Management
              </p>
                <a id="Debt"  class="navigation_link"></a>
              </div>
            </div>
      
            <div class="FNATitle5">
              <div class="FNANavItemBG"><p>Proper Protection</p>
                <a id="Properprotection" href="javascript:" class="navigation_link"></a>
              </div>
            </div>
    
            <div class="FNATitle6">
              <div class="FNANavItemBG"><p>Asset Accumulation</p>
                <a id="AssetManagement"  class="navigation_link"></a>
              </div>
            </div>
        
            <div class="FNATitle7">
              <div class="FNANavItemBG"><p>Print Options</p>
                <a id="Print"  class="navigation_link"></a>
              </div>
            </div>
     
      </ul>
      </div>
      {/* <div id='formHolder'>

      </div> */}
    {/* </div> */}
  </ React.Fragment>
  );
}

export default FnaSidebar;
