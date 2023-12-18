import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import First from './First';
import Second from './Second';
import Third from './Third';

function Stipulation(props) {
  const navigate = useNavigate();
  const location = useLocation();


  
  if (location.state.idx === 1) {
    return (
      <First />
    );
  }
  else if(location.state.idx === 2){
    return (
      <Second />
    )
  }
  else if(location.state.idx === 3){
    return <Third />
  }
}

export default Stipulation;
