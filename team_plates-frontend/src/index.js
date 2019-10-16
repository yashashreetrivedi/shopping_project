import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import App from './app/App.jsx';
import { Provider } from 'react-redux';
import store from './store/store.jsx';
import './index.css';


document.addEventListener('DOMContentLoaded', function () {
	ReactDOM.render( <Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));
});