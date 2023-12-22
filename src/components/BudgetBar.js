import React from 'react';
import '../styles//BudgetBar.css'

function BudgetBar({use, budget, curledger}) {
  const canUse = budget - use;
  document.documentElement.style.setProperty("--progWidthPercent", canUse/budget*100+"%");
  document.documentElement.style.setProperty("--progWidth", canUse/budget*100);
  return (
    <div className='BudgetBar'>
      <div className='leftBox'>
        목표<br />예산
      </div>
      <div className='rightBox'>
        <div className='goal'>{curledger.goal}</div>
        <div className='progStat'>{canUse.toLocaleString()}/{budget.toLocaleString()}</div>
        <div className='progBar'>
          <div className='prog'></div>
        </div>
      </div>
    </div>
  );
}

export default BudgetBar;
