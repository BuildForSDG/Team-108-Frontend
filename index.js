import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faHome,
  faUsers,
  faUser,
  faSearch,
  faArrowDown,
  faCog,
  faCommentAlt
} from '@fortawesome/free-solid-svg-icons';

import './index.css';
import Dashboard from './src/components/dashboard/Dashboard';


library.add(faHome, faUsers, faUser, faSearch, faArrowDown, faCog, faCommentAlt);
ReactDOM.render(<Dashboard />, document.getElementById('app'));
