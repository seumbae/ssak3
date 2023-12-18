import React, { useEffect, useState } from 'react';
import '../styles/NewFNLG.css';
import NewFNLGTheme from '../components/NewFNLGTheme';
import NewFNLGBudget from '../components/NewFNLGBudget';
import NewFNLGGoal from '../components/NewFNLGGoal';
import NewFNLGLastBudget from '../components/NewFNLGLastBudget';
import { getThemeList } from '../services/service';

function NewFNLG() {
  const [themeShow, setThemeShow] = useState(true);
  const [lastBudgetShow, setLastBudgetShow] = useState(false);
  const [budgetShow, setBudgetShow] = useState(false);
  const [goalShow, setGoalShow] = useState(false);

  const [themeList, setThemeList] = useState([]);
  const [selectedTheme, setSelectedTheme] = useState({ themeId: 0, themeName: '전체' });

  useEffect(() => {
    getThemeList().then((res) => {
      setThemeList(res.data);
    });
  }, []);

  return (
    <>
      {themeShow && (
        <NewFNLGTheme
          setThemeShow={setThemeShow}
          setLastBudgetShow={setLastBudgetShow}
          themeList={themeList}
          setThemeList={setThemeList}
          setSelectedTheme={setSelectedTheme}
        />
      )}
      {lastBudgetShow && (
        <NewFNLGLastBudget
          setLastBudgetShow={setLastBudgetShow}
          setBudgetShow={setBudgetShow}
          selectedTheme={selectedTheme}
        />
      )}
      {budgetShow && <NewFNLGBudget setBudgetShow={setBudgetShow} setGoalShow={setGoalShow} />}
      {goalShow && <NewFNLGGoal setGoalShow={setGoalShow} setThemeShow={setThemeShow} />}
    </>
  );
}

export default NewFNLG;
