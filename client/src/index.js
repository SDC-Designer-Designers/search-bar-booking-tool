// jshint esversion:6
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import App1 from './components/App.1.jsx';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('search-bar-service'));
ReactDOM.render(<Provider store={store}><App1/></Provider>, document.getElementById('booking-tool-service'));
