import React from 'react';

import './Patient.css'


const PatientList = ({patients}) => {
  return (
    <div className={'patient-list'}>
      {/*if there are patients in the list of patients passed  */}
      {
        patients.length !== 0 && 
          patients.map((patient, index) => {
            return (
              <div key={index}>
                <div className={'image-holder'}></div>
                <h4>{patient.name}</h4>
                <p>Sex: &nbsp; {patient.gender}</p>
                <p>Age: &nbsp; {patient.age}</p>
              </div>
            )
          }
        ) 
        
        ||    // if there are no patients
        
        <p>No patient</p>
      }
    </div>
  )
}

export default PatientList;