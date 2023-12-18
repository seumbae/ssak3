import React, { useState } from 'react';
import '../styles/NewFNLG.css';
import NewFNLGTheme from '../components/NewFNLGTheme';
import NewFNLGBudget from '../components/NewFNLGBudget';
import NewFNLGGoal from '../components/NewFNLGGoal';
import NewFNLGLastBudget from '../components/NewFNLGLastBudget';

function NewFNLG() {
  const [themeShow, setThemeShow] = useState(true);
  const [lastBudgetShow, setLastBudgetShow] = useState(false);
  const [budgetShow, setBudgetShow] = useState(false);
  const [goalShow, setGoalShow] = useState(false);

  return (
    <div>
      {themeShow && <NewFNLGTheme setThemeShow={setThemeShow} setLastBudgetShow={setLastBudgetShow} />}
      {lastBudgetShow && <NewFNLGLastBudget setLastBudgetShow={setLastBudgetShow} setBudgetShow={setBudgetShow} />}
      {budgetShow && <NewFNLGBudget setBudgetShow={setBudgetShow} setGoalShow={setGoalShow} />}
      {goalShow && <NewFNLGGoal setGoalShow={setGoalShow} setThemeShow={setThemeShow} />}
    </div>
  );
}

export default NewFNLG;
