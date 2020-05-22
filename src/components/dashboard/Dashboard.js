import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  BrowserRouter as Router, 
  NavLink, 
  Switch, 
  Route,
} from 'react-router-dom';

import './Dashboard.css';
import ChatContainer from '../chat/ChatContainer';
import PatientListContainer from '../patients/PatientListContainer';

// This component will also hold a user profile avatar
const DashboardTopHeader = ({headerText}) =>  <h1>{headerText}</h1>


export default class Dashboard extends React.Component {
  render() {
    return (
      <Router>
        <section className={'dashboard-base'}>
          {/* sidenav */}
          <nav>
            <ul className={'dashboard-navlink-wrap'}>
              <NavLink activeClassName={'active-link'} exact={true} to={'/'}>
                <div><FontAwesomeIcon icon={'home'} /></div>
                <div>Home</div>
              </NavLink>

              <NavLink activeClassName={'active-link'} to={'/patients'}>
                <div><FontAwesomeIcon icon={'users'} /></div>
                <div>Patients</div>
              </NavLink>

              <NavLink activeClassName={'active-link'} to={'/profile'}>
                <div><FontAwesomeIcon icon={'user'} /></div>
                <div>Profile</div>
              </NavLink>

              <NavLink activeClassName={'active-link'} to={'/chat'}>
                <div><FontAwesomeIcon icon={'comment-alt'} /></div>
                <div>Messages</div>
              </NavLink>

              <NavLink activeClassName={'active-link'} to={'/settings'}>
                <div><FontAwesomeIcon icon={'cog'} /></div>
                <div>Settings</div>
              </NavLink>
            </ul>
          </nav>


          <div className={'dashboard--content'}>            
            <Switch>
              <Route path={'/chat'} component={ChatContainer} />
              <Route path={'/patients'} component={PatientListContainer} />
            </Switch>
          </div>
        </section>
      </Router>
    )
  }
}


export {DashboardTopHeader};