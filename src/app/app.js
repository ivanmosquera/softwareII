import React from 'react';
import ReactDOM from 'react-dom';
import {Router, useRouterHistory} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {createHashHistory} from 'history';
import AppRoutes from './AppRoutes';
import Header from './components/Main'; // Our custom react component
import RoomTypesShow from './components/pages/tipos-habitacion/Page';

// Helpers for debugging
window.React = React;
window.Perf = require('react-addons-perf');

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
ReactDOM.render(<RoomTypesShow />
,
 document.getElementById('app'));
