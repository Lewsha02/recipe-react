import React from 'react';

import { Ingredients } from '../components';

import '../app.scss';

const Recipe = ( state ) => {
	const meal = state.location.state.meal;
	console.log(meal);

	return (
		<div className='recipe'>
			<h2 className='recipe__title'>{meal.name}</h2>
			<p className='recipe__descr'>
				{meal.descr}
			</p>
			<div
				className='recipe__img'
				style={{
					backgroundImage:
						`url(${meal.imageUrl}`,
				}}></div>
			<div className='recipe__text'>
				<Ingredients/>
				<div className='instruction'>
					<p>{meal.instruction}</p>
				</div>
			</div>
		</div>
	);
};

export default Recipe;
