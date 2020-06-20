import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import CategorySelection from './components/CategorySelection';
import NewEntry from './components/NewEntry';

const App = () => {
	return (
		<div>
			<h1>Journal App</h1>
			<BrowserRouter>
				<Route path='/' component={Home} />
				<Route path='/category' component={CategorySelection} />
				<Route path='/entry/new' component={NewEntry} />
			</BrowserRouter>
		</div>
	);
};

export default App;
