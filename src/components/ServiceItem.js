import React from 'react';
import '../styles//ServiceItem.css';

function ServiceItem(props) {
  return (
    <div className="ServiceItem">
      <div className="descriptionBox">
        <div>
          {props.desTop}
          <br />
          {props.desBottom}
        </div>
      </div>
      <div className="bottomBox">
        <button onClick={props.handleCardClick} className="title">
          {props.title}
        </button>
        <div className="imgBox">
          <img src={props.image} alt="이미지" />
        </div>
      </div>
    </div>
  );
}

export default ServiceItem;
