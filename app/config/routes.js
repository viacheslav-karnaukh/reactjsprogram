import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';


var Main = require('../components/Main');
var Home = require('../components/Home');

const routes = (
	<Router history={hashHistory}>
		<Route path='/' component={Main}>
			<Route path='/home' component={Home}/>
		</Route>
	</Router>
);

module.exports = routes;