import React from 'react';
import './titletext.css';

export default function TitleText(props) {
  return (
      <div className="titletext">
        {props.children}
      </div>
  )
}