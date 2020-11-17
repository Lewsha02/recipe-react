import React from 'react';
import PropTypes from 'prop-types';

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

Ingredients.propTypes = {
	ingredients: PropTypes.array
};

export default Ingredients;
