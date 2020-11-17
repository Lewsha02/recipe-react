import React from 'react';

import { Ingredients } from '../components';

import '../app.scss';

const Recipe = ( state ) => {
	const { name, descr, imageUrl, ingredients, instruction } = state.location.state;

	return (
		<div className='recipe'>
			<h2 className='recipe__title'>{name}</h2>
			<p className='recipe__descr'>
				{descr}
			</p>
			<div
				className='recipe__img'
				style={{
					backgroundImage:
						`url(${imageUrl}`,
				}}></div>
			<div className='recipe__text'>
				<Ingredients ingredients={ingredients}/>
				<div className='instruction'>
					<p>{instruction}</p>
				</div>
			</div>
		</div>
	);
};

export default Recipe;
