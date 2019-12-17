// jshint esversion:6
import React from 'react';
import SVG from 'react-inlinesvg';
import FlagIcon from '../../dist/icons/united-states-of-america.svg';
import FlagDropdown from './flag-dropdown.jsx';

class FlagButton extends React.Component {
  constructor() {
    super();
    this.state = {
      selected: false
    };
    this.toggleFlagButton = this.toggleFlagButton.bind(this);
  }

  toggleFlagButton() {
    this.setState({selected: !this.state.selected});
  }

  render() {
    return (
      <div onClick={this.props.handleSelected} className='al-header-option-container3 al-flag-button'>
        <table className='al-header-option-table'>
          <tbody>
            <tr>
              <td className='al-header-option-icon-container'>
                <SVG src={FlagIcon} className='al-header-option-flag'/>
              </td>
            </tr>
          </tbody>
        </table>
        {
          this.props.selected ?
          (
            <div className='al-flag-dropdown-container'>
              <FlagDropdown />
            </div>
          )
          :
          (
            null
          )
        }
      </div>
    );
  }
}

export default FlagButton;