// jshint esversion:6
import React from 'react';
import SVG from 'react-inlinesvg';
import HeartIcon from '../../dist/icons/iconmonstr-heart-thin.svg';

const TripBoardsButton = () => {
  return (
    <div className='al-header-option-container al-trip-boards-button'>
      <table className='al-header-option-table'>
        <tbody>
          <tr>
            <td className='al-header-option-icon-container'><SVG src={HeartIcon} className='al-header-option-icon'/></td>
            <td><span className='al-header-option-text'>Trip Boards</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TripBoardsButton;