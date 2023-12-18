import React from 'react';
import PropTypes from 'prop-types';

const weekDaysNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const CalendarHeaderComponent = ({
  headerData,
  horizontal,
  onPressArrowLeft,
  onPressArrowRight,
  onPressListView,
  onPressGridView,
}) => {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.dateText}>{headerData.calendarDate}</div>
        <button style={styles.iconContainer} onClick={onPressArrowLeft}>
          <img
            style={[styles.icon, styles.leftIcon]}
            src={require('../assets/images/right-arrow.png')}
            alt="Left Arrow"
          />
        </button>
        <button style={styles.iconContainer} onClick={onPressArrowRight}>
          <img style={styles.icon} src={require('../assets/images/right-arrow.png')} alt="Right Arrow" />
        </button>
        <button
          style={[styles.iconContainer, { opacity: horizontal ? 0.2 : 1 }]}
          onClick={onPressListView}
          disabled={horizontal}
        >
          <img style={styles.icon} src={require('../assets/images/right-arrow.png')} alt="List View" />
        </button>
        <button
          style={[styles.iconContainer, { opacity: horizontal ? 1 : 0.2 }]}
          onClick={onPressGridView}
          disabled={!horizontal}
        >
          <img style={styles.icon} src={require('../assets/images/right-arrow.png')} alt="Grid View" />
        </button>
      </div>
      {!horizontal && (
        <div style={styles.week}>
          {weekDaysNames.map((day, index) => (
            <div key={index} style={styles.weekName}>
              {day}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

CalendarHeaderComponent.propTypes = {
  headerData: PropTypes.object.isRequired,
  horizontal: PropTypes.bool,
  onPressArrowRight: PropTypes.func.isRequired,
  onPressArrowLeft: PropTypes.func.isRequired,
  onPressListView: PropTypes.func.isRequired,
  onPressGridView: PropTypes.func.isRequired,
};

const styles = {
  container: {
    flex: 1,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    padding: '12px',
    backgroundColor: '#eceef1',
  },
  week: {
    marginTop: '7px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  weekName: {
    marginTop: '2px',
    marginBottom: '7px',
    width: '32px',
    textAlign: 'center',
    fontSize: '12px',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: '#7c7c7c',
  },
  dateText: {
    flex: 6,
    fontSize: '18px',
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftIcon: {
    transform: 'rotate(180deg)',
  },
  icon: {
    width: '24px',
    height: '24px',
  },
};

export default CalendarHeaderComponent;
