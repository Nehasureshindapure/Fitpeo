import React from 'react';
import { links } from '../data/nav';
import * as Icons from 'lucide-react';

function Side() {
  return (
    <div className="side">
      <h3>DASHBOARD</h3>
      <ul>
        {links.map(link => {
        
          const Icon = Icons[link.icon];
          return (
            <li key={link.name} className="nav-item">&nbsp;&nbsp;&nbsp;&nbsp;
              <Icon size={20} />
              &nbsp;&nbsp;
              <span>{link.name}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Side;