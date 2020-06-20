import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Home from './components/Home';
import CategorySelection from './components/CategorySelection';
import NewEntry from './components/NewEntry';
import NotFound from './components/NotFound';

const App = () => {
	return (
		<div>
			<h1>Journal App</h1>

			<BrowserRouter>
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/category'>Categories</Link>
					</li>
					<li>
						<Link to='/entry/new'>New Entry</Link>
					</li>
				</ul>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/category' component={CategorySelection} />
					<Route exact path='/entry/new' component={NewEntry} />
					<Route component={NotFound} />
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default App;
