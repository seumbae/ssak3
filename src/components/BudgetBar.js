import React from 'react';
import '../styles//BudgetBar.css'

function BudgetBar(props) {
  document.documentElement.style.setProperty("--progWidth", props.use/props.budget*100+"%");
  return (
    <div className='BudgetBar'>
      <div className='leftBox'>
        목표<br />예산
      </div>
      <div className='rightBox'>
        <div className='goal'>{props.curledger.goal}</div>
        <div className='progStat'>{props.use.toLocaleString()}/{props.budget.toLocaleString()}</div>
        <div className='progBar'>
          <div className='prog'></div>
        </div>
      </div>
    </div>
  );
}

export default BudgetBar;
