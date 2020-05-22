import React from 'react';
import PropTypes from 'prop-types';

import './Patient.css';


const PatientList = ({ patients }) => (
    <div className={'patient-list'}>
      {/* if there are patients in the list of patients passed  */}
      {
        patients.length !== 0
          ? patients.map((patient, index) => (
              <div key={index}>
                <div className={'image-holder'}></div>
                <h4>{patient.name}</h4>
                <p>Sex: &nbsp; {patient.gender}</p>
                <p>Age: &nbsp; {patient.age}</p>
              </div>
          )) : <p>No patient</p>
      }
    </div>
);


PatientList.propTypes = {
  patients: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      gender: PropTypes.string,
      age: PropTypes.number
    })
  ).isRequired
};


export default PatientList;
