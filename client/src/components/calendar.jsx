// jshint esversion:6
import React from 'react';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {

  }

  getRows(month, year) {

    if (!month || !year) {
      return null;
    }

    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let monthNumbers = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    let datesInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let daysInWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    let startDates = {
      '2019': [2, 5, 5, 1, 3, 6, 1, 4, 0, 2, 5, 0],
      '2020': [3, 6, 0, 3, 5, 1, 3, 6, 2, 4, 0, 2]
    };
    let years = [2019, 2020];
    let dates = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];

    let startDate = startDates[year][months.indexOf(month)];
    let daysInMonth = datesInMonths[months.indexOf(month)];
    let monthsArr = [[],[],[],[],[],[]];
    let j = 0;
    while (j < startDate) {
      monthsArr[0].push(' ');
      j += 1;
    }
    let selectedIndex = 0;
    for (let i = 1; i <= daysInMonth; i++) {
      if (monthsArr[selectedIndex].length === 7) {
        selectedIndex += 1;
      }
      monthsArr[selectedIndex].push(i);
    }
    while (monthsArr[selectedIndex].length < 7) {
      monthsArr[selectedIndex].push(' ');
    }
    return monthsArr;
  }

  render() {
    let monthsArr = this.getRows(this.props.month, this.props.year);
    let monthNumbers = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let monthNum = monthNumbers[months.indexOf(this.props.month)];

    return (
      <div className='al-calendar'>
        <div className='al-calendar-title-container'>
          <span className='al-calendar-title'><strong>{`${this.props.month} ${this.props.year}`}</strong></span>
        </div>
        <div className='al-calendar-table-container'>
          <table className='al-calendar-table'>
            <thead>
                <tr className='al-calendar-table-header-row'>
                  <th className='al-calendar-table-header-column'><span className='al-calendar-table-header-text'>S</span></th>
                  <th className='al-calendar-table-header-column'><span className='al-calendar-table-header-text'>M</span></th>
                  <th className='al-calendar-table-header-column'><span className='al-calendar-table-header-text'>T</span></th>
                  <th className='al-calendar-table-header-column'><span className='al-calendar-table-header-text'>W</span></th>
                  <th className='al-calendar-table-header-column'><span className='al-calendar-table-header-text'>T</span></th>
                  <th className='al-calendar-table-header-column'><span className='al-calendar-table-header-text'>F</span></th>
                  <th className='al-calendar-table-header-column'><span className='al-calendar-table-header-text'>S</span></th>
                </tr>
              </thead>
            <tbody className='al-calendar-table-body'>
            {
              monthsArr ?
              (
                monthsArr.map((week, i) => {
                  let style;
                  let textStyle;
                  let dates2 = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
                  return (
                    <tr className='al-calendar-table-week-row' key={i}>
                    {
                      week.map((day, j) => {
                        if (day === ' ') {
                          style = 'al-calendar-day-cell-normal';
                          textStyle = 'al-calendar-day-cell-text';
                        } else if (this.props.year + '-' + monthNum + '-' + dates2[Number(day) - 1] === this.props.check_out || this.props.year + '-' + monthNum + '-' + dates2[Number(day) - 1] === this.props.check_in) {
                          style = 'al-calendar-day-cell-selected';
                          textStyle = 'al-calendar-day-cell-text-selected';
                        } else if (this.props.check_out && this.props.check_in && this.props.check_in < this.props.year + '-' + monthNum + '-' + dates2[Number(day) - 1] && this.props.check_out > this.props.year + '-' + monthNum + '-' + dates2[Number(day) - 1]) {
                          style = 'al-calendar-day-cell-between';
                          textStyle = 'al-calendar-day-cell-text';
                        } else {
                          style = 'al-calendar-day-cell';
                          textStyle = 'al-calendar-day-cell-text';
                        }
                        return (
                          <td className={style} key={j} onClick={this.props.handleCheckInClick}>
                          <span className={textStyle}>{day}</span>
                          </td>
                        );
                      })
                    }
                    </tr>
                  );
                })
              )
              :
              (
                null
              )
            }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Calendar;