// jshint esversion:6
import React from 'react';
import SVG from 'react-inlinesvg';
import USAFlag from '../../dist/icons/united-states-of-america.svg';
import AustraliaFlag from '../../dist/icons/australia.svg';
import BrazilFlag from '../../dist/icons/brazil.svg';
import DenmarkFlag from '../../dist/icons/denmark.svg';
import GermanyFlag from '../../dist/icons/germany.svg';
import SpainFlag from '../../dist/icons/spain.svg';
import FranceFlag from '../../dist/icons/france.svg';
import ItalyFlag from '../../dist/icons/italy.svg';
import MexicoFlag from '../../dist/icons/mexico.svg';
import NewZealandFlag from '../../dist/icons/new-zealand.svg';
import NorwayFlag from '../../dist/icons/norway.svg';
import SwitzerlandFlag from '../../dist/icons/switzerland.svg';
import IrelandFlag from '../../dist/icons/ireland.svg';
import SingaporeFlag from '../../dist/icons/singapore.svg';
import SriLankaFlag from '../../dist/icons/sri-lanka.svg';
import FinlandFlag from '../../dist/icons/finland.svg';
import SwedenFlag from '../../dist/icons/sweden.svg';
import UnitedKingdomsFlag from '../../dist/icons/united-kingdom.svg';
import CanadaFlag from '../../dist/icons/canada.svg';
import GreeceFlag from '../../dist/icons/greece.svg';
import JapanFlag from '../../dist/icons/japan.svg';

const FlagDropdown = () => {
  return (
    <div className='al-flag-dropdown'>
      <table className='al-flag-table'>
        <tbody className='al-flag-table-body'>
          <tr className='al-flag-table-row'>
            <td className='al-flag-table-entry'>
              <div className='al-flag-language-container'>
                <SVG src={USAFlag} className='al-flag-icon'/>
                <span className='al-flag-language-text'>United States</span>
              </div>
            </td>
            <td className='al-flag-table-entry'>
              <div className='al-flag-language-container'>
                <SVG src={AustraliaFlag} className='al-flag-icon'/>
                <span className='al-flag-language-text'>Australia</span>
              </div>
            </td>
            <td className='al-flag-table-entry'>
              <div className='al-flag-language-container'>
                <SVG src={BrazilFlag} className='al-flag-icon'/>
                <span className='al-flag-language-text'>Brasil</span>
              </div>
            </td>
          </tr>
          <tr className='al-flag-table-row'>
            <td className='al-flag-table-entry'>
              <div className='al-flag-language-container'>
                <SVG src={DenmarkFlag} className='al-flag-icon'/>
                <span className='al-flag-language-text'>Danmark</span>
              </div>
            </td>
            <td className='al-flag-table-entry'>
              <div className='al-flag-language-container'>
                <SVG src={GermanyFlag} className='al-flag-icon'/>
                <span className='al-flag-language-text'>Deutschland</span>
              </div>
            </td>
            <td className='al-flag-table-entry'>
              <div className='al-flag-language-container'>
                <SVG src={SpainFlag} className='al-flag-icon'/>
                <span className='al-flag-language-text'>España</span>
              </div>
            </td>
          </tr>
          <tr className='al-flag-table-row'>
            <td className='al-flag-table-entry'>
              <div className='al-flag-language-container'>
                <SVG src={FranceFlag} className='al-flag-icon'/>
                <span className='al-flag-language-text'>France</span>
              </div>
            </td>
            <td className='al-flag-table-entry'>
              <div className='al-flag-language-container'>
                <SVG src={ItalyFlag} className='al-flag-icon'/>
                <span className='al-flag-language-text'>Italia</span>
              </div>
            </td>
            <td className='al-flag-table-entry'>
              <div className='al-flag-language-container'>
                <SVG src={MexicoFlag} className='al-flag-icon'/>
                <span className='al-flag-language-text'>México</span>
              </div>
            </td>
          </tr>
          <tr className='al-flag-table-row'>
            <td className='al-flag-table-entry'>
              <div className='al-flag-language-container'>
                <SVG src={NewZealandFlag} className='al-flag-icon'/>
                <span className='al-flag-language-text'>New Zealand</span>
              </div>
            </td>
            <td className='al-flag-table-entry'>
              <div className='al-flag-language-container'>
                <SVG src={NorwayFlag} className='al-flag-icon'/>
                <span className='al-flag-language-text'>Norge</span>
              </div>
            </td>
            <td className='al-flag-table-entry'>
              <div className='al-flag-language-container'>
                <SVG src={SwitzerlandFlag} className='al-flag-icon'/>
                <span className='al-flag-language-text'>Switzerland</span>
              </div>
            </td>
          </tr>
          <tr className='al-flag-table-row'>
            <td className='al-flag-table-entry'>
              <div className='al-flag-language-container'>
                <SVG src={IrelandFlag} className='al-flag-icon'/>
                <span className='al-flag-language-text'>Ireland</span>
              </div>
            </td>
            <td className='al-flag-table-entry'>
              <div className='al-flag-language-container'>
                <SVG src={SingaporeFlag} className='al-flag-icon'/>
                <span className='al-flag-language-text'>Singapore</span>
              </div>
            </td>
            <td className='al-flag-table-entry'>
              <div className='al-flag-language-container'>
                <SVG src={SriLankaFlag} className='al-flag-icon'/>
                <span className='al-flag-language-text'>Sri Lanka</span>
              </div>
            </td>
          </tr>
          <tr className='al-flag-table-row'>
            <td className='al-flag-table-entry'>
              <div className='al-flag-language-container'>
                <SVG src={FinlandFlag} className='al-flag-icon'/>
                <span className='al-flag-language-text'>Suomi</span>
              </div>
            </td>
            <td className='al-flag-table-entry'>
              <div className='al-flag-language-container'>
                <SVG src={SwedenFlag} className='al-flag-icon'/>
                <span className='al-flag-language-text'>Sverige</span>
              </div>
            </td>
            <td className='al-flag-table-entry'>
              <div className='al-flag-language-container'>
                <SVG src={UnitedKingdomsFlag} className='al-flag-icon'/>
                <span className='al-flag-language-text'>United Kingdoms</span>
              </div>
            </td>
          </tr>
          <tr className='al-flag-table-row'>
            <td className='al-flag-table-entry'>
              <div className='al-flag-language-container'>
                <SVG src={CanadaFlag} className='al-flag-icon'/>
                <span className='al-flag-language-text'>Canada</span>
              </div>
            </td>
            <td className='al-flag-table-entry'>
              <div className='al-flag-language-container'>
                <SVG src={GreeceFlag} className='al-flag-icon'/>
                <span className='al-flag-language-text'>Greece</span>
              </div>
            </td>
            <td className='al-flag-table-entry'>
              <div className='al-flag-language-container'>
                <SVG src={JapanFlag} className='al-flag-icon'/>
                <span className='al-flag-language-text'>Japan</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FlagDropdown;