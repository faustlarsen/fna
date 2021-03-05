import React from 'react';
import './goals.css';

function GoalsForm() {
return (  
  < React.Fragment>
    {/* <div id="parentContainer" > */}
      {/* <div id='formHolder'> */}
      <div class='goalsTitle'>
        <h2>Goals and Dreams</h2>
      </div>

      <div id='goal-terms'>
        <div id='term-title1'>
          <h4>Short Term</h4>
          <p>1-3 years</p>
        </div>
        <div id='term-title2'>
          <h4>Mid Range</h4>
          <p>3-7 years</p>
        </div>
        <div id='term-title3'>
          <h4>Long Term</h4>
          <p>7-10 years</p>
        </div>
      </div>

      <div id='goals-mainForm'>
        <div id='goals-list'>
          <h4>Make a Major Purchase</h4>
        </div>
        <div id='goals-checkBox1'>
          <input id="MajorPurchaseShort" name="MajorPurchaseShort" type="checkbox" value="true" />
          <input name="MajorPurchaseShort" type="hidden" value="false" />
          <input id="MajorPurchaseMid" name="MajorPurchaseMid" type="checkbox" value="true" />
          <input name="MajorPurchaseMid" type="hidden" value="false" />
          <input id="MajorPurchaseLong" name="MajorPurchaseLong" type="checkbox" value="true" />
          <input name="MajorPurchaseLong" type="hidden" value="false" />
        </div>
      </div>

      <div id='goals-mainForm'>
        <div id='goals-list'>
          <h4>Build Retirement Wealth</h4>
        </div>
        <div id='goals-checkBox2'>
          <input id="RetirementShort" name="RetirementShort" type="checkbox" value="true" />
          <input name="RetirementShort" type="hidden" value="false" />
          <input id="RetirementMedium" name="RetirementMedium" type="checkbox" value="true" />
          <input name="RetirementMedium" type="hidden" value="false" />
          <input id="RetirementLong" name="RetirementLong" type="checkbox" value="true" />
          <input name="RetirementLong" type="hidden" value="false" />
        </div>
      </div>

      <div id='goals-mainForm'>
        <div id='goals-list'>
          <h4>Buy a New Home</h4>
        </div>
        <div id='goals-checkBox3'>
          <input id="BuyHomeShort" name="BuyHomeShort" type="checkbox" value="true" />
          <input name="BuyHomeShort" type="hidden" value="false" />
          <input id="BuyHomeMedium" name="BuyHomeMedium" type="checkbox" value="true" />
          <input name="BuyHomeMedium" type="hidden" value="false" />
          <input id="BuyHomeLong" name="BuyHomeLong" type="checkbox" value="true" />
          <input name="BuyHomeLong" type="hidden" value="false" />
        </div>
      </div>

      <div id='goals-mainForm'>
        <div id='goals-list'>
        <h4>Build Savings for Unexpected Expenses </h4>
        </div>
        <div id='goals-checkBox4'>
          <input id="BuildSavingsShort" name="BuildSavingsShort" type="checkbox" value="true" />
          <input name="BuildSavingsShort" type="hidden" value="false" />
          <input id="BuildSavingsMedium" name="BuildSavingsMedium" type="checkbox" value="true" />
          <input name="BuildSavingsMedium" type="hidden" value="false" />
          <input id="BuildSavingsLong" name="BuildSavingsLong" type="checkbox" value="true" />
          <input name="BuildSavingsLong" type="hidden" value="false" />
        </div>
      </div>

      <div id='goals-mainForm'>
        <div id='goals-list'>
        <h4>Reduce or Pay Off Mortgage</h4>
        </div>
        <div id='goals-checkBox5'>
          <input id="PayOffMortgageShort" name="PayOffMortgageShort" type="checkbox" value="true" />
          <input name="PayOffMortgageShort" type="hidden" value="false" />
          <input id="PayOffMortgageMedium" name="PayOffMortgageMedium" type="checkbox" value="true" />
          <input name="PayOffMortgageMedium" type="hidden" value="false" />
          <input id="PayOffMortgageLong" name="PayOffMortgageLong" type="checkbox" value="true" />
          <input name="PayOffMortgageLong" type="hidden" value="false" />
        </div>
      </div>

      <div id='goals-mainForm'>
        <div id='goals-list'>
        <h4>Education Funding</h4>
        </div>
        <div id='goals-checkBox6'>
          <input id="EducationShort" name="EducationShort" type="checkbox" value="true" />
          <input name="EducationShort" type="hidden" value="false" />
          <input id="EducationMedium" name="EducationMedium" type="checkbox" value="true" />
          <input name="EducationMedium" type="hidden" value="false" />
          <input id="EducationLong" name="EducationLong" type="checkbox" value="true" />
          <input name="EducationLong" type="hidden" value="false" />
        </div>
      </div>

      <div id='goals-mainForm'>
        <div id='goals-list'>
        <h4>Alternative Income in case of disability or death</h4>
        </div>
        <div id='goals-checkBox7'>
          <input id="AlternativeIncomeShort" name="AlternativeIncomeShort" type="checkbox" value="true" />
          <input name="AlternativeIncomeShort" type="hidden" value="false" />
          <input id="AlternativeIncomeMedium" name="AlternativeIncomeMedium" type="checkbox" value="true" />
          <input name="AlternativeIncomeMedium" type="hidden" value="false" />
          <input id="AlternativeIncomeLong" name="AlternativeIncomeLong" type="checkbox" value="true" />
          <input name="AlternativeIncomeLong" type="hidden" value="false" />
        </div>
      </div>

      <div id='goals-mainForm'>
        <div id='goals-list'>
        <h4>Help Support Aging Parents</h4>
        </div>
        <div id='goals-checkBox8'>
          <input id="SupportParentsShort" name="SupportParentsShort" type="checkbox" value="true" />
          <input name="SupportParentsShort" type="hidden" value="false" />
          <input id="SupportParentsMedium" name="SupportParentsMedium" type="checkbox" value="true" />
          <input name="SupportParentsMedium" type="hidden" value="false" />
          <input id="SupportParentsLong" name="SupportParentsLong" type="checkbox" value="true" />
          <input name="SupportParentsLong" type="hidden" value="false" />
        </div>
      </div>

      <div id='goals-mainForm'>
        <div id='goals-list'>
        <h4>Pay Off Credit Cards/Debts</h4>
        </div>
        <div id='goals-checkBox9'>
          <input id="PayOffDebtsShort" name="PayOffDebtsShort" type="checkbox" value="true" />
          <input name="PayOffDebtsShort" type="hidden" value="false" />
          <input id="PayOffDebtsMedium" name="PayOffDebtsMedium" type="checkbox" value="true" />
          <input name="PayOffDebtsMedium" type="hidden" value="false" />
          <input id="PayOffDebtsLong" name="PayOffDebtsLong" type="checkbox" value="true" />
          <input name="PayOffDebtsLong" type="hidden" value="false" />
        </div>
      </div>

      <div id='goals-mainForm'>
        <div id='goals-list'>
        <h4>Start a Business</h4>
        </div>
        <div id='goals-checkBox10'>
          <input id="StartBusinessShort" name="StartBusinessShort" type="checkbox" value="true" />
          <input name="StartBusinessShort" type="hidden" value="false" />
          <input id="StartBusinessMedium" name="StartBusinessMedium" type="checkbox" value="true" />
          <input name="StartBusinessMedium" type="hidden" value="false" />
          <input id="StartBusinessLong" name="StartBusinessLong" type="checkbox" value="true" />
          <input name="StartBusinessLong" type="hidden" value="false" />
        </div>
      </div>
      <div type='button' className='formButton'>
         <button>Next</button>
      </div>
      {/* </div> */}
    {/* </div> */}
  </ React.Fragment>
  );
}

export default GoalsForm;
