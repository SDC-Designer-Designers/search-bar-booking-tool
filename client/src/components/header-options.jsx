// jshint esversion:6
import React from 'react';
import TripBoardsButton from './trip-boards-button.jsx';
import LoginButton from './login-button.jsx';
import HelpButton from './help-button.jsx';
import FeedbackButton from './feedback-button.jsx';
import FlagButton from './flag-button.jsx';
import ListPropertyButton from './list-property-button.jsx';

class HeaderOptions extends React.Component {
  constructor() {
    super();
    this.state = {
      selected1: false,
      selected2: false,
      selected3: false,
      selected4: false
    };
    this.closeDropdown = this.closeDropdown.bind(this);
    this.handleSelected1 = this.handleSelected1.bind(this);
    this.handleSelected2 = this.handleSelected2.bind(this);
    this.handleSelected3 = this.handleSelected3.bind(this);
    this.handleSelected4 = this.handleSelected4.bind(this);
  }

  closeDropdown(e) {
    if (this.state.selected1) {
      this.setState({selected1: false});
    } else if (this.state.selected2) {
      this.setState({selected2: false});
    } else if (this.state.selected3) {
      this.setState({selected3: false});
    } else if (this.state.selected4) {
      this.setState({selected4: false});
    }
  }

  handleSelected1() {
    this.setState({selected1: !this.state.selected1});
  }

  handleSelected2() {
    this.setState({selected2: !this.state.selected2});
  }

  handleSelected3() {
    this.setState({selected3: !this.state.selected3});
  }

  handleSelected4() {
    this.setState({selected4: !this.state.selected4});
  }

  render() {
    return (
      <div className='al-header-options-container'>
        <table onClick={this.closeDropdown}>
          <tbody>
            <tr>
              <td>
                <TripBoardsButton />
              </td>
              <td>
                <LoginButton selected={this.state.selected1} handleSelected={this.handleSelected1} />
              </td>
              <td>
                <HelpButton selected={this.state.selected2} handleSelected={this.handleSelected2} />
              </td>
              <td>
                <FeedbackButton selected={this.state.selected3} handleSelected={this.handleSelected3} />
              </td>
              <td>
                <FlagButton selected={this.state.selected4} handleSelected={this.handleSelected4} />
              </td>
              <td>
                <ListPropertyButton />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
};

export default HeaderOptions;