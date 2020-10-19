import React from 'react';
import { Route } from 'react-router-dom';

import { Home, Recipe } from './pages';

import './app.scss';

const App = () => {
	return (
		<div className="container">
			<Route path="/" exact component={Home} />
			<Route path="/recipe" exact component={Recipe} />
		</div>
	);
}

export default App;
