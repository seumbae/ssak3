import React from 'react';
import '../styles//ServiceItem.css'

function ServiceItem(props) {
  return (
    <div className='ServiceItem'>
      <div className='descriptionBox'>
        <p>{props.desTop}<br />
        {props.desBottom}</p>
      </div>
      <div className='bottomBox'>
        <div className='title'>
          {props.title}
        </div>
        <div className='imgBox'>
          <img src={props.image} alt="이미지" />
        </div>
      </div>
    </div>
  );
}

export default ServiceItem;
 