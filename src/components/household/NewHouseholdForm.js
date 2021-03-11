import React from "react";
import PropTypes from "prop-types";
import HouseholdForm from "./HouseholdForm";
import { useFirestore } from 'react-redux-firebase'

function NewHouseholdForm(props){
  const firestore = useFirestore();
  function addClientToFirestore(event) {
    event.preventDefault();
    props.onNewClientCreation();

    return firestore.collection('clients').add(
      {
        firstName: event.target.firstName.value,
        lastName: event.target.lastName.value, 
        phone: event.target.phone.value, 
        dob: event.target.dob.value,
      }
    );
  }

  return (
    <React.Fragment>
      <HouseholdForm 
        formSubmissionHandler={addClientToFirestore}
        buttonText="Create!" />
    </React.Fragment>
  );
}

NewHouseholdForm.propTypes = {
  onNewClientCreation: PropTypes.func
};

export default NewHouseholdForm;