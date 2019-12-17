// jshint esversion:6
import React from 'react';
import SVG from 'react-inlinesvg';
import UserIcon from '../../dist/icons/iconmonstr-user-male-thin.svg';
import UpArrowIcon from '../../dist/icons/iconmonstr-arrow-65.svg';
import DownArrowIcon from '../../dist/icons/iconmonstr-arrow-66.svg';
import LoginDropdown from './login-dropdown.jsx';

class LoginButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    };
    this.toggleLoginButton = this.toggleLoginButton.bind(this);
  }

  toggleLoginButton() {
    this.setState({selected: !this.state.selected});
  }

  render() {
    return (
      <div className='al-header-option-container al-login-button'>
      <table onClick={this.props.handleSelected} className='al-header-option-table'>
        <tbody>
          <tr>
            <td className='al-header-option-icon-container'><SVG src={UserIcon} className='al-header-option-icon'/></td>
            <td><span className='al-header-option-text'>Login</span></td>
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
          <div className='al-login-dropdown-container'>
            <LoginDropdown />
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

export default LoginButton;