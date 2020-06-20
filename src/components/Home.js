import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div>
			<h1>Home</h1>
			<Link to='/category'>
				<button>Create New Entry</button>
			</Link>
		</div>
	);
};

export default Home;
