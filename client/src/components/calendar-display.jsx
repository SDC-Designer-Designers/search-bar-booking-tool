// jshint esversion:6
import React from 'react';
import Calendar from './calendar.jsx';
import { connect } from 'react-redux';
import {setCheckInDate1, setCheckOutDate1, startLoading, stopLoading, makeValid, makeInvalid} from '../redux/booking/booking.action.js';
import { selectCheckInDate, selectCheckOutDate} from '../redux/booking/booking.selectors.js';

class CalendarDisplay extends React.Component {
  constructor(props) {
    super(props);
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

    this.state = {
      check_in: '',
      check_out: '',
      check_in_number: '',
      check_out_number: '',
      year: 2019,
      month: 'December'
    };
    this.handleLeftClick = this.handleLeftClick.bind(this);
    this.handleRightClick = this.handleRightClick.bind(this);
    this.handleCheckInClick = this.handleCheckInClick.bind(this);
    this.selectSecondMonth = this.selectSecondMonth.bind(this);
    this.handleCheckInClick2 = this.handleCheckInClick2.bind(this);
    this.clearDates = this.clearDates.bind(this);
  }

  handleCheckInClick(e) {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let monthNumbers = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    let dates2 = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
    if (!this.state.check_in_number) {
      if (e.target.childNodes[0].childNodes.length) {
        this.setState({check_in_number: e.target.childNodes[0].innerHTML, check_out_number: ''}, () => this.setState({check_in: this.state.year + '-' + monthNumbers[months.indexOf(this.state.month)] + '-' + dates2[Number(this.state.check_in_number) - 1], check_out: ''}, () => {
          this.props.setCheckInDate1(this.state.check_in);
          this.props.setCheckOutDate1(this.state.check_out);
        }));
      } else {
        this.setState({check_in_number: e.target.innerHTML, check_out_number: ''}, () => this.setState({check_in: this.state.year + '-' + monthNumbers[months.indexOf(this.state.month)] + '-' + dates2[Number(this.state.check_in_number) - 1], check_out: ''}, () => {
          this.props.setCheckInDate1(this.state.check_in);
          this.props.setCheckOutDate1(this.state.check_out);
        }));
      }
    } else if (this.state.check_in_number && !this.state.check_out_number) {
      if (e.target.childNodes[0].childNodes.length) {
        if (this.state.year + '-' + monthNumbers[months.indexOf(this.state.month)] + '-' + dates2[Number(e.target.childNodes[0].innerHTML) - 1] <= this.state.check_in) {
          this.setState({check_in_number: e.target.childNodes[0].innerHTML, check_out_number: ''}, () => this.setState({check_in: this.state.year + '-' + monthNumbers[months.indexOf(this.state.month)] + '-' + dates2[Number(this.state.check_in_number) - 1], check_out: ''}, () => {
            this.props.setCheckInDate1(this.state.check_in);
            this.props.setCheckOutDate1(this.state.check_out);
          }));
        } else {
          this.setState({check_out_number: e.target.childNodes[0].innerHTML}, () => this.setState({check_out: this.state.year + '-' + monthNumbers[months.indexOf(this.state.month)] + '-' + dates2[Number(this.state.check_out_number) - 1]}, () => {
            this.props.setCheckOutDate1(this.state.check_out);
            this.props.closeCalendar();
          }));
        }
      } else {
        if (this.state.year + '-' + monthNumbers[months.indexOf(this.state.month)] + '-' + dates2[Number(e.target.innerHTML) - 1] <= this.state.check_in) {
          this.setState({check_in_number: e.target.innerHTML, check_out_number: ''}, () => this.setState({check_in: this.state.year + '-' + monthNumbers[months.indexOf(this.state.month)] + '-' + dates2[Number(this.state.check_in_number) - 1], check_out: ''}, () => {
            this.props.setCheckInDate1(this.state.check_in);
            this.props.setCheckOutDate1(this.state.check_out);
          }));
        } else {
          this.setState({check_out_number: e.target.innerHTML}, () => this.setState({check_out: this.state.year + '-' + monthNumbers[months.indexOf(this.state.month)] + '-' + dates2[Number(this.state.check_out_number) - 1]}, () => {
            this.props.setCheckOutDate1(this.state.check_out);
            this.props.closeCalendar();
          }));
        }
      }
    } else {
      e.persist();
      this.setState({check_in: '', check_out: '', check_in_number: '', check_out_number: ''}, () => {
        if (e.target.childNodes[0].childNodes.length) {
          this.setState({check_in_number: e.target.childNodes[0].innerHTML}, () => this.setState({check_in: this.state.year + '-' + monthNumbers[months.indexOf(this.state.month)] + '-' + dates2[Number(this.state.check_in_number) - 1]}, () => {
            this.props.setCheckInDate1(this.state.check_in);
          }));
        } else {
          this.setState({check_in_number: e.target.innerHTML}, () => this.setState({check_in: this.state.year + '-' + monthNumbers[months.indexOf(this.state.month)] + '-' + dates2[Number(this.state.check_in_number) - 1]}, () => {
            this.props.setCheckInDate1(this.state.check_in);
          }));
        }
      });
    }
  }

  selectSecondMonth(month, year) {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    if (month === 'December' && year === 2019) {
      return 'January';
    } else if (month === 'December' && year === 2020) {
      return null;
    } else {
      return months[months.indexOf(month) + 1];
    }
  }

  handleCheckInClick2(e) {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let monthNumbers = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    let dates2 = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
    let year2 = (this.state.month === 'December' && this.state.year === 2019) ? 2020 : this.state.year;
    let month2 = this.selectSecondMonth(this.state.month, this.state.year);
    let month2Number = monthNumbers[months.indexOf(month2)];
    if (!this.state.check_in_number) {
      if (e.target.childNodes[0].childNodes.length) {
        this.setState({check_in_number: e.target.childNodes[0].innerHTML, check_out_number: ''}, () => this.setState({check_in: year2 + '-' + monthNumbers[months.indexOf(month2)] + '-' + dates2[Number(this.state.check_in_number) - 1], check_out: ''}, () => {
          this.props.setCheckInDate1(this.state.check_in);
          this.props.setCheckOutDate1(this.state.check_out);
        }));
      } else {
        this.setState({check_in_number: e.target.innerHTML, check_out_number: ''}, () => this.setState({check_in: year2 + '-' + monthNumbers[months.indexOf(month2)] + '-' + dates2[Number(this.state.check_in_number) - 1], check_out: ''}, () => {
          this.props.setCheckInDate1(this.state.check_in);
          this.props.setCheckOutDate1(this.state.check_out);
        }));
      }
    } else if (this.state.check_in_number && !this.state.check_out_number) {
      if (e.target.childNodes[0].childNodes.length) {
        if (year2 + '-' + month2Number + '-' + dates2[Number(e.target.childNodes[0].innerHTML) - 1] <= this.state.check_in) {
          this.setState({check_in_number: e.target.childNodes[0].innerHTML, check_out_number: ''}, () => this.setState({check_in: year2 + '-' + monthNumbers[months.indexOf(month2)] + '-' + dates2[Number(this.state.check_in_number) - 1], check_out: ''}, () => {
            this.props.setCheckInDate1(this.state.check_in);
            this.props.setCheckOutDate1(this.state.check_out);
          }));
        } else {
          this.setState({check_out_number: e.target.childNodes[0].innerHTML}, () => this.setState({check_out: year2 + '-' + monthNumbers[months.indexOf(month2)] + '-' + dates2[Number(this.state.check_out_number) - 1]}, () => {
            this.props.setCheckOutDate1(this.state.check_out);
            this.props.closeCalendar();
          }));
        }
      } else {
        if (year2 + '-' + month2Number + '-' + dates2[Number(e.target.innerHTML) - 1] <= this.state.check_in) {
          this.setState({check_in_number: e.target.innerHTML, check_out_number: ''}, () => this.setState({check_in: year2 + '-' + monthNumbers[months.indexOf(month2)] + '-' + dates2[Number(this.state.check_in_number) - 1], check_out: ''}, () => {
            this.props.setCheckInDate1(this.state.check_in);
            this.props.setCheckOutDate1(this.state.check_out);
          }));
        } else {
          this.setState({check_out_number: e.target.innerHTML}, () => this.setState({check_out: year2 + '-' + monthNumbers[months.indexOf(month2)] + '-' + dates2[Number(this.state.check_out_number) - 1]}, () => {
            this.props.setCheckOutDate1(this.state.check_out);
            this.props.closeCalendar();
          }));
        }
      }
    } else {
      e.persist();
      this.setState({check_in: '', check_out: '', check_in_number: '', check_out_number: ''}, () => {
        if (e.target.childNodes[0].childNodes.length) {
          this.setState({check_in_number: e.target.childNodes[0].innerHTML}, () => this.setState({check_in: year2 + '-' + monthNumbers[months.indexOf(month2)] + '-' + dates2[Number(this.state.check_in_number) - 1]}, () => {
            this.props.setCheckInDate1(this.state.check_in);
            this.props.setCheckOutDate1(this.state.check_out);
          }));
        } else {
          this.setState({check_in_number: e.target.innerHTML}, () => this.setState({check_in: year2 + '-' + monthNumbers[months.indexOf(month2)] + '-' + dates2[Number(this.state.check_in_number) - 1]}, () => {
            this.props.setCheckInDate1(this.state.check_in);
            this.props.setCheckOutDate1(this.state.check_out);
          }));
        }
      });
    }
  }

  clearDates(e) {
    this.setState({check_in_number: '', check_in: '', check_out_number: '', check_out: ''}, () => {
      this.props.setCheckInDate1(this.state.check_in);
      this.props.setCheckOutDate1(this.state.check_out);
    });
  }

  handleLeftClick(e) {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    if (this.state.month === 'January' && this.state.year === 2019) {

    } else if (this.state.month === 'January' && this.state.year === 2020) {
      this.setState({month: 'December', year: 2019});
    } else {
      this.setState({month: months[months.indexOf(this.state.month) - 1]});
    }
  }

  handleRightClick() {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    if (this.state.month === 'December' && this.state.year === 2019) {
      this.setState({month: 'January', year: 2020});
    } else if (this.state.month === 'November' && this.state.year === 2020) {
    } else {
      this.setState({month: months[months.indexOf(this.state.month) + 1]});
    }
  }

  componentDidMount() {

  }

  render() {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    return (
      <div className='al-calendar-display'>
        <div className='al-calendars-container'>
          <div className='al-calendar-container1'>
            <Calendar year={this.state.year} month={this.state.month} check_in={this.state.check_in} check_out={this.state.check_out} check_in_number={this.state.check_in_number} check_out_number={this.state.check_out_number} handleCheckInClick={this.handleCheckInClick}/>
          </div>
          <div className='al-calendar-container2'>
            <Calendar year={`${(this.state.month === 'December' && this.state.year === 2019) ? 2020 : this.state.year}`} month={this.selectSecondMonth(this.state.month, this.state.year)} check_in={this.state.check_in} check_out={this.state.check_out} check_in_number={this.state.check_in_number} check_out_number={this.state.check_out_number} handleCheckInClick={this.handleCheckInClick2}/>
          </div>
        </div>
        <div className='al-calendar-left-button-container'>
          <button className='al-calendar-button' onClick={this.handleLeftClick}>
            <span className='al-calendar-button-text'>{`<`}</span>
          </button>
        </div>
        <div className='al-calendar-right-button-container'>
          <button className='al-calendar-button' onClick={this.handleRightClick}>
            <span className='al-calendar-button-text'>{`>`}</span>
          </button>
        </div>
        <div className='al-calendar-clear-dates-container' onClick={this.clearDates}>
          <span className='al-calendar-clear-dates-text'>Clear dates
          </span>
        </div>
        <div className='al-calendar-close-container-top' onClick={this.props.closeCalendar}>
          <div className='al-calendar-close-text-container'>
            <span className='al-calendar-close-text'>Close</span>
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return ({
      selectCheckInDate: selectCheckInDate(state),
      selectCheckOutDate: selectCheckOutDate(state)
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
      setCheckInDate1: (date) => dispatch(setCheckInDate1(date)),
      setCheckOutDate1: (date) => dispatch(setCheckOutDate1(date)),
      makeValid: () => dispatch(makeValid()),
      makeInvalid: () => dispatch(makeInvalid()),
      startLoading: () => dispatch(startLoading()),
      stopLoading: () => dispatch(stopLoading())
   });
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarDisplay);
