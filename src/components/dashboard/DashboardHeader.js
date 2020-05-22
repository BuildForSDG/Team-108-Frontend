import React from 'react';
import PropTypes from 'prop-types';


const DashboardTopHeader = ({ headerText }) => <h1>{headerText}</h1>;
DashboardTopHeader.propTypes = {
  headerText: PropTypes.string.isRequired
};

export default DashboardTopHeader;
