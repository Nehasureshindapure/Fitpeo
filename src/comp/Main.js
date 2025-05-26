import React from 'react';
import Overview from './Overview';
import Anatomy from './Anatomy';
import Cards from './Cards';
import Calendar from './Calendar';
import Schedule from './Schedule';
import Activity from './Activity';

function Main() {
  return (
    <div className="main-box">
      <Overview />
      <Anatomy />
      <Cards />
      <Calendar />
      <Schedule />
      <Activity />
    </div>
  );
}

export default Main;
