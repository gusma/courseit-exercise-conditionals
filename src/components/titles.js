import React from 'react';
import './titles.css';

const Titles = (props) => {
  return (
    <div className="title__container">
      <div className="left">
      <h4>{props.title}</h4></div>
      <div className="right">
      <div className="dotted"></div>
      </div>
    </div>
  );
};

export default Titles;