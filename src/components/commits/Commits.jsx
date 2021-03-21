import React from 'react';
import './Commits.scss';
import { generateYear } from './commitsData';

function Commits() {
  const data = generateYear();
  console.log(data);
  return (
    <div className="Commit">
      <div className="year">
        {data.map((items, index) => {
          return (
            <div key={index} className="week">
              {items.map((subItems, index) => {
                return (
                  <div className={`day-color-${subItems}`} key={index}></div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Commits;
