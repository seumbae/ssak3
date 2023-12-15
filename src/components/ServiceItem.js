import React from 'react';
import '../styles//ServiceItem.css'

function ServiceItem(props) {
  function test() {
    console.log(props.title);
  }
  return (
    <div className='ServiceItem' onClick={test} onKeyDown={(e) => console.log(e.key)} role='presentation'>
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
 