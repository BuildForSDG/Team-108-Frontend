import React from 'react';

import './Badge.css';

const BadgeCircle = ({countText}) => <div className={'badge-circle'}>{countText}</div>

const Badge = ({badgeText, countText}) => (
  <a className={'badge-wrap'}>
    <p>{badgeText}</p> &nbsp; <BadgeCircle countText={countText} />
  </a>
)


export default Badge;