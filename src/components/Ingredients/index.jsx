import React from 'react';

import './Ingredients.scss';

const Ingredients = ( {ingredients} ) => {
	return (
		<ul className='ingredients'>
			{
				ingredients && ingredients.map(ingredient => {
					return (
						<li key={Math.random()}>{ingredient}</li>
					);
				})
			}
		</ul>
	);
};

export default Ingredients;
