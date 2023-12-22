import React from 'react';
import '../styles//BudgetBar.css'

function BudgetBar({use, budget, curledger}) {
  const canUse = budget - use;
  const progWidth = (canUse > 0) ? canUse/budget * 100 : 0;
  document.documentElement.style.setProperty("--progWidthPercent", progWidth+"%");
  document.documentElement.style.setProperty("--progWidth", progWidth);
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
