import React from 'react';

import Badge from '../badge/Badge';
import PatientList from './PatientList';
import SearchInput from '../search/SearchInput';
import DashboardTopHeader from '../dashboard/DashboardHeader';


const FAKE_PATIENTS = [
  {
    name: 'Jane Doe',
    gender: 'Male',
    age: 30
  },
  {
    name: 'Nathan Rad',
    gender: 'Male',
    age: 30
  },
  {
    name: 'Sussy Rodar',
    gender: 'Female',
    age: 30
  },
  {
    name: 'Jannifer Mat',
    gender: 'Female',
    age: 30
  },
  {
    name: 'Roland Doe',
    gender: 'Male',
    age: 30
  },
  {
    name: 'Jane Doe',
    gender: 'Male',
    age: 30
  },
  {
    name: 'Nathan Rad',
    gender: 'Male',
    age: 30
  },
  {
    name: 'Sussy Rodar',
    gender: 'Female',
    age: 30
  },
  {
    name: 'Jannifer Mat',
    gender: 'Female',
    age: 30
  },
  {
    name: 'Roland Doe',
    gender: 'Male',
    age: 30
  },
  {
    name: 'Jane Doe',
    gender: 'Male',
    age: 30
  },
  {
    name: 'Nathan Rad',
    gender: 'Male',
    age: 30
  },
  {
    name: 'Sussy Rodar',
    gender: 'Female',
    age: 30
  },
  {
    name: 'Jannifer Mat',
    gender: 'Female',
    age: 30
  },
  {
    name: 'Roland Doe',
    gender: 'Male',
    age: 30
  },
  {
    name: 'Jane Doe',
    gender: 'Male',
    age: 30
  },
  {
    name: 'Nathan Rad',
    gender: 'Male',
    age: 30
  },
  {
    name: 'Sussy Rodar',
    gender: 'Female',
    age: 30
  },
  {
    name: 'Jannifer Mat',
    gender: 'Female',
    age: 30
  },
  {
    name: 'Roland Doe',
    gender: 'Male',
    age: 30
  },
  {
    name: 'Jane Doe',
    gender: 'Male',
    age: 30
  },
  {
    name: 'Nathan Rad',
    gender: 'Male',
    age: 30
  },
  {
    name: 'Sussy Rodar',
    gender: 'Female',
    age: 30
  },
  {
    name: 'Jannifer Mat',
    gender: 'Female',
    age: 30
  },
  {
    name: 'Roland Doe',
    gender: 'Male',
    age: 30
  },
  {
    name: 'Jane Doe',
    gender: 'Male',
    age: 30
  },
  {
    name: 'Nathan Rad',
    gender: 'Male',
    age: 30
  },
  {
    name: 'Sussy Rodar',
    gender: 'Female',
    age: 30
  },
  {
    name: 'Jannifer Mat',
    gender: 'Female',
    age: 30
  },
  {
    name: 'Roland Doe',
    gender: 'Male',
    age: 30
  }
];


class PatientListContainer extends React.Component {
  render() {
    return (
      <div style={{ padding: '18px' }}>
        <DashboardTopHeader headerText={'Patients'} />


        <section className={'top-section'}>
          <div className={'search-input-wrap--patient'}>
            <SearchInput placeholder={'search patients'} />
          </div>

          <div className={'badge-wrap--patient'}>
            <Badge badgeText={'All'} countText={20} />
            <Badge badgeText={'New'} countText={7} />
            <Badge badgeText={'High Risk'} countText={10} />
          </div>
        </section>

        <PatientList patients={FAKE_PATIENTS}/>
      </div>
    );
  }
}


export default PatientListContainer;
