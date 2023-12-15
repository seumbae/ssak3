import React from 'react';
import '../styles/NewFNLG.css';
import NewFNLGTheme from '../components/NewFNLGTheme';
import NewFNLGBudget from '../components/NewFNLGBudget';
import NewFNLGGoal from '../components/NewFNLGGoal';

function NewFNLG() {
  return (
    <div>
      <NewFNLGTheme></NewFNLGTheme>
      <NewFNLGBudget></NewFNLGBudget>
      <NewFNLGGoal></NewFNLGGoal>
    </div>
  );
}

export default NewFNLG;
