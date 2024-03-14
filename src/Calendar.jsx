// Calendar.js
import React, { useState } from 'react';
import moment from 'moment';
import Heading from './Heading';
import Days from './Days';
import './style.css';

const Calendar = () => {
  const [date, setDate] = useState(moment());
  const [startDate, setStartDate] = useState(moment().subtract(5, 'day'));
  const [endDate, setEndDate] = useState(moment().add(3, 'day'));

  const resetDate = () => {
    setDate(moment());
  };

  const changeMonth = (month) => {
    const newDate = moment(date).month(month);
    setDate(newDate);
  };

  const changeDate = (date) => {
    let newStartDate = startDate;
    let newEndDate = endDate;

    if (
      startDate === null ||
      date.isBefore(startDate, 'day') ||
      !startDate.isSame(endDate, 'day')
    ) {
      newStartDate = moment(date);
      newEndDate = moment(date);
    } else if (date.isSame(startDate, 'day') && date.isSame(endDate, 'day')) {
      newStartDate = null;
      newEndDate = null;
    } else if (date.isAfter(startDate, 'day')) {
      newEndDate = moment(date);
    }

    setStartDate(newStartDate);
    setEndDate(newEndDate);
  };

  return (
    <div className="calendar">
      <Heading date={date} changeMonth={changeMonth} resetDate={resetDate} />
      <Days
        onClick={changeDate}
        date={date}
        startDate={startDate}
        endDate={endDate}
      />
    </div>
  );
};

export default Calendar;
