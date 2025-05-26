import React from 'react';

function Activity() {
  return (
    <div className="activity">
      <h3>Activity</h3>
         <p>3 appointments this week</p>
        <div className="bars">
        <div className="bar" style={{ height: '40%' }}></div>
        <div className="bar" style={{ height: '70%' }}></div>
      <div className="bar" style={{ height: '30%' }}></div>
           <div className="bar" style={{ height: '90%' }}></div>
   <div className="bar" style={{ height: '50%' }}></div>
      </div>
        </div>
  );
}

export default Activity;
