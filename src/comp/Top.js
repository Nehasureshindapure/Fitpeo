import React from 'react';
import { Bell, Plus } from 'lucide-react';


function Top() {
  return (
    <div className="top">
      <h1>Healthcare.</h1>
      <input type="text" placeholder="Search..." />
      <Bell className="icon" />
      <div className="user">
        <img src="/img/body.png" alt="avatar" />

       
       
      </div>
      <button className="add">
        <Plus />
      </button>
    </div>
  );
}

export default Top;
