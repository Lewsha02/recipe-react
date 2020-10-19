import React from 'react';

import { RecipeItem } from '../components';
import '../app.scss';

const Home = () => {
	return (
		<div className="homepage">
			<h2 className='recipe-heading'>Recipes</h2>
			<div className="recipes">
				<RecipeItem/>
				<RecipeItem/>
				<RecipeItem/>
			</div>
		</div>
	);
};

export default Home;
