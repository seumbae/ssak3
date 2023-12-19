import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import First from './First';
import Second from './Second';
import Third from './Third';
import Forth from './Forth';

function Stipulation(props) {
  const navigate = useNavigate();
  const location = useLocation();

  if(location.state === undefined){
    navigate('/stip', { state: { idx: 1 } });
  }
  
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
  else if(location.state.idx === 4){
    return <Forth />
  }
}

export default Stipulation;
