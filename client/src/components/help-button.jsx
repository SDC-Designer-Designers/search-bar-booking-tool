// jshint esversion:6
import React from 'react';
import SVG from 'react-inlinesvg';
import QuestionIcon from '../../dist/icons/information.svg';
import UpArrowIcon from '../../dist/icons/iconmonstr-arrow-65.svg';
import DownArrowIcon from '../../dist/icons/iconmonstr-arrow-66.svg';
import HelpDropdown from './help-dropdown.jsx';

class HelpButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    };
    this.toggleHelpButton = this.toggleHelpButton.bind(this);
  }

  toggleHelpButton() {
    this.setState({selected: !this.state.selected});
  }

  render() {
    return (
      <div className='al-header-option-container al-help-button'>
      <table onClick={this.props.handleSelected} className='al-header-option-table'>
        <tbody>
          <tr>
            <td className='al-header-option-icon-container al-question-mark'><SVG src={QuestionIcon} className='al-header-option-icon'/></td>
            <td><span className='al-header-option-text'>Help</span></td>
            <td className='al-header-option-arrow-container'>
            {
              this.props.selected ?
              (
                <SVG src={DownArrowIcon} className='al-header-option-arrow'/>
              )
              :
              (
                <SVG src={UpArrowIcon} className='al-header-option-arrow'/>
              )
            }
            </td>
          </tr>
        </tbody>
      </table>
      {
        this.props.selected ?
        (
          <div className='al-help-dropdown-container'>
            <HelpDropdown />
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

export default HelpButton;