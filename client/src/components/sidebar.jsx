// jshint esversion:6
import React from 'react';
import BookingTool from './booking-tool.jsx';
import BookingFooter from './booking-footer.jsx';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className='al-sidebar'>
        <div className='al-booking-tool-container al-nav'>
          <BookingTool />
          <div className='al-booking-footer-container'>
            <BookingFooter />
          </div>
        </div>
      </div>
    );
  }
};

export default Sidebar;