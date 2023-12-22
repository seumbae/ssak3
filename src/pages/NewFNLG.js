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

  const [monthBudget, setMonthBudget] = useState(0); // 월 예산
  const [monthExpense, setMonthExpense] = useState(0); // 지난달 사용 금액
  const [isPublic, setIsPublic] = useState('1'); // 공개 여부
  const [themeList, setThemeList] = useState([]);
  const [selectedTheme, setSelectedTheme] = useState({ themeId: 1, themeName: '전체' });

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
          setMonthExpense={setMonthExpense}
          monthExpense={monthExpense}
        />
      )}
      {budgetShow && (
        <NewFNLGBudget setBudgetShow={setBudgetShow} setGoalShow={setGoalShow} setMonthBudget={setMonthBudget} selectedTheme={selectedTheme} monthExpense={monthExpense} />
      )}
      {goalShow && (
        <NewFNLGGoal
          setGoalShow={setGoalShow}
          setThemeShow={setThemeShow}
          selectedTheme={selectedTheme}
          monthBudget={monthBudget}
          monthExpense={monthExpense}
          isPublic={isPublic}
        />
      )}
    </>
  );
}

export default NewFNLG;
