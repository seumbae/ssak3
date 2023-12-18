import React, { useState } from 'react';
import { Calendar } from 'react-native-calendars';
import moment from 'moment';

import CalendarDayComponent from './Weekly';
import CalendarHeaderComponent from './WeeklyHeader';

const ViewInventoryMain = () => {
  const [calendarDate, setCalendarDate] = useState(moment());
  const [horizontal, setHorizontal] = useState(false);

  const onPressArrowLeft = () => {
    setCalendarDate(calendarDate.clone().subtract(1, 'month'));
  };

  const onPressArrowRight = () => {
    setCalendarDate(calendarDate.clone().add(1, 'month'));
  };

  const onPressListView = () => {
    setHorizontal(true);
  };

  const onPressGridView = () => {
    setHorizontal(false);
  };

  const onDayPress = (date) => {
    setCalendarDate(moment(date.dateString));
  };

  return (
    <div style={{ flex: 1 }}>
      <Calendar
        current={calendarDate.format('YYYY-MM-DD')}
        dayComponent={CalendarDayComponent}
        calendarHeaderComponent={CalendarHeaderComponent}
        headerData={{
          calendarDate: calendarDate.format('DD MMM, YYYY'),
        }}
        style={{
          paddingLeft: 0,
          paddingRight: 0,
        }}
        onPressArrowLeft={onPressArrowLeft}
        onPressArrowRight={onPressArrowRight}
        onPressListView={onPressListView}
        onPressGridView={onPressGridView}
        markedDates={{
          '2019-02-23': { soldOut: false, blocked: false, inventory: 2 },
          '2019-02-24': { soldOut: false, blocked: false, inventory: 2 },
          '2019-02-25': { soldOut: false, blocked: true, inventory: 0 },
          '2019-02-26': { soldOut: true, blocked: true, inventory: 2 },
        }}
        horizontal={horizontal}
        onDayPress={onDayPress}
      />
    </div>
  );
};

export default ViewInventoryMain;
