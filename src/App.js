import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import CategorySelection from './components/CategorySelection';
import NewEntry from './components/NewEntry';
import NotFound from './components/NotFound';

const App = () => {
	return (
		<div>
			<h1>Journal App</h1>
			<BrowserRouter>
				<Route exact path='/' component={Home} />
				<Route exact path='/category' component={CategorySelection} />
				<Route exact path='/entry/new' component={NewEntry} />
				<Route component={NotFound} />
			</BrowserRouter>
		</div>
	);
};

export default App;
