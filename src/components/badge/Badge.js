import React from 'react';
import PropTypes from 'prop-types';

import './Badge.css';

const BadgeCircle = ({ countText }) => <div className={'badge-circle'}>{countText}</div>;
BadgeCircle.propTypes = {
  countText: PropTypes.string.isRequired
};

const Badge = ({ badgeText, countText }) => (
  <a className={'badge-wrap'}>
    <p>{badgeText}</p> &nbsp; <BadgeCircle countText={countText} />
  </a>
);

Badge.propTypes = {
  countText: PropTypes.string.isRequired,
  badgeText: PropTypes.string.isRequired
};


export default Badge;
