import React, { useEffect, useState } from 'react';
import { overviewData } from '../data/health';

function Overview() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(overviewData);
  }, []);

  return (
    <div className="overview">
      {data.map((item, index) => (
        <div key={index} className="overview-card">
          <h3>{item.title}</h3>
          <p>{item.value}</p>
        </div>
      ))}
    </div>
  );
}

export default Overview;
