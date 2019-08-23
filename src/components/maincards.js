import React from 'react';
import './maincards.css';

const MainCard = (props) => {
  return (
    <div className="main__card">
      <div className="main__card--upside" style={{backgroundColor: props.bgColor}}>
      <h3>{props.title}</h3>
      </div>
      <div className="main__card--downside">
      <h4>{props.subtitle}</h4>
      <p>{props.textcontent}</p>
      </div>
    </div>
  );
};

export default MainCard;