import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { RecipeItem } from '../components';
import '../app.scss';

const Home = () => {
	const [meals, setMeals] = useState([]);

	useEffect(() => {
		axios.get('http://localhost:3001/meals').then((resp) => {
			const data = resp.data;
			setMeals(data);
		});
	}, [setMeals]);

	return (
		<div className='homepage'>
			<h2 className='recipe-heading'>Recipes</h2>
			<div className='recipes'>
				{meals &&
					meals.map((meal) => {
						return (
							<Link to={{
								pathname: "/recipe",
								state: meal
							}} key={meal.id} className="recipe-item">
								<RecipeItem
									imageUrl={meal.imageUrl}
									title={meal.name}
									key={meal.id}
								/>
							</Link>
						);
					})}
			</div>
		</div>
	);
};

export default Home;
