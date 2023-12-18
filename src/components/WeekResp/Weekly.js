import React from 'react';
import PropTypes from 'prop-types';

const weekDaysNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const CalendarDayComponent = ({ state, marking = {}, date, current, horizontal, children, onPress }) => {
  const getContentStyle = () => {
    const style = {
      content: {},
      text: {
        color: '#181c26',
      },
    };

    if (marking.soldOut) {
      style.text.color = '#fff';
      style.content.backgroundColor = '#e35052';
      style.content.borderRadius = 50;
    } else if (marking.blocked) {
      style.text.color = '#fff';
      style.content.backgroundColor = '#c1c2c1';
      style.content.borderRadius = 50;
    } else if (state === 'disabled') {
      style.text.color = '#c1c2c1';
    } else if (state === 'today') {
      style.text.color = '#fff';
      style.content.backgroundColor = '#216bc9';
      style.content.borderRadius = 50;
    } else if (current === date.dateString) {
      style.content.borderRadius = 50;
      style.content.borderWidth = 1;
      style.content.borderColor = '#216bc9';
    }

    return style;
  };

  const getFooterTextStyle = () => {
    const style = {
      color: '#c1c2c1',
    };

    if (marking.inventory > 0) {
      style.color = '#4caf50';
    }
    return style;
  };

  const getInventoryCount = () => {
    if (typeof marking === 'object' && marking.inventory >= 0) {
      return marking.inventory;
    }
    return 'NA';
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        {horizontal ? <div style={styles.weekName}>{weekDaysNames[date.weekDay]}</div> : null}
      </div>
      <button
        style={{
          ...styles.content,
          ...getContentStyle().content,
        }}
        onClick={() => onPress(date)}
      >
        <div style={{ ...styles.contentText, ...getContentStyle().text }}>{String(children)}</div>
      </button>
      <div>
        <div style={getFooterTextStyle()}>{getInventoryCount()}</div>
      </div>
    </div>
  );
};

CalendarDayComponent.propTypes = {
  children: PropTypes.any,
  state: PropTypes.string,
  marking: PropTypes.any,
  horizontal: PropTypes.bool,
  date: PropTypes.object,
  onPress: PropTypes.func.isRequired,
  current: PropTypes.string,
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 7,
    marginRight: 7,
  },
  weekName: {
    width: 32,
    textAlign: 'center',
    fontSize: 12,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: '#7c7c7c',
  },
  content: {
    width: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  },
  contentText: {
    fontSize: 18,
  },
};

export default CalendarDayComponent;
