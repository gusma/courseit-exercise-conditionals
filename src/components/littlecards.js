import React from 'react';
import './littlecards.css';

const LittleCard = (props) => {
  return (
    <div className="little__card">
      <div className="image__container">
      <img src={props.icon} alt="icon" height="100%" />
      </div>
      <h4>{props.title}</h4>
      <p>{props.textcontent}</p>
    </div>
  );
};

export default LittleCard;