import React from 'react';
import './sidebar.css';
import { Link } from "react-router-dom";

  function FnaSidebar() {
  return (
  <React.Fragment>
      <div id="navFNABG">
        <ul id="navFNA">
      
          <div class="FNATitle1">
            <div class="FNANavItemBG">
              <Link to="/household" className="sidebar-item">Household Information</Link>
              <a id="Household" class="navigation_link"></a>
            </div>
          </div>
         <br />
          <div class="FNATitle2">
            <div class="FNANavItemBG">
            <Link to="/assumptions" className="sidebar-item">Assumptions</Link>
              <a id="Assumptions"  class="navigation_link"></a>
            </div>
          </div>
          <br />
          <div class="FNATitle3">
            <div class="FNANavItemBG">
            <Link to="/goals" className="sidebar-item">Goals and Dreams</Link>
              <a id="Goals"  class="navigation_link"></a>
            </div>
          </div>
          <br />
          <div class="FNATitle4">
            <div class="FNANavItemBG">
            <Link to="/CashIncome" className="sidebar-item">Cash Flow</Link>
              <a id="Cashflow"  class="navigation_link"></a>
            </div>
          </div>
          <br />
          <div class="FNATitle8">
            <div class="FNANavItemBG">
            <Link to="/" className="sidebar-item">Debt Managemen</Link>
              <a id="Debt"  class="navigation_link"></a>
            </div>
          </div>
          <br />
          <div class="FNATitle5">
            <div class="FNANavItemBG">
            <Link to="/" className="sidebar-item">Proper Protection</Link>
              <a id="Properprotection" href="javascript:" class="navigation_link"></a>
            </div>
          </div>
          <br />
          <div class="FNATitle6">
            <div class="FNANavItemBG">
              <Link to="/" className="sidebar-item">Asset Accumulation</Link>
              <a id="AssetManagement"  class="navigation_link"></a>
            </div>
          </div>
          <br />
          <div class="FNATitle7">
            <div class="FNANavItemBG">
            <Link to="/" className="sidebar-item">Print Options</Link>
              <a id="Print"  class="navigation_link"></a>
            </div>
          </div>
        </ul>
      </div>
  </ React.Fragment>
  );
}

export default FnaSidebar;
