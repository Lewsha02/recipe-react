import React from 'react';

import './RecipeItem.scss';

const RecipeItem = () => {
	return (
		<div className='recipe-item'>
			<div
				className='recipe-item__img'
				style={{
					backgroundImage:
						'url(https://iamafoodblog.b-cdn.net/wp-content/uploads/2019/02/full-english-7361.jpg)',
				}}></div>
			<div className='recipe-item__text'>English breakfast</div>
		</div>
	);
};

export default RecipeItem;
