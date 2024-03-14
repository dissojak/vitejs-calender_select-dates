// Heading.js
import React from 'react';
import moment from 'moment';

const Heading = ({ date, changeMonth, resetDate }) => (
  <nav className="calendar--nav">
    <a onClick={() => changeMonth(date.month() - 1)}>&#8249;</a>
    <h1 onClick={() => resetDate()}>
      {date.format('MMMM')} <small>{date.format('YYYY')}</small>
    </h1>
    <a onClick={() => changeMonth(date.month() + 1)}>&#8250;</a>
  </nav>
);

export default Heading;
