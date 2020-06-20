import React, { useState } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Home from './components/Home';
import CategorySelection from './components/CategorySelection';
import NewEntry from './components/NewEntry';
import NotFound from './components/NotFound';

const App = () => {
	const defaultCategories = ['Travel', 'Politics', 'Sport', 'Other'];
	const [categories, setCategories] = useState(defaultCategories);

	return (
		<div>
			<h1>Journal App</h1>

			<BrowserRouter>
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>
				</ul>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route
						exact
						path='/category'
						render={(props) => (
							<CategorySelection {...props} categories={categories} />
						)}
					/>
					<Route
						exact
						path='/entry/new/:id'
						render={(props) => <NewEntry {...props} categories={categories} />}
					/>
					<Route component={NotFound} />
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default App;
