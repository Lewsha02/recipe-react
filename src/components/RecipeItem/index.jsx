import React from 'react';

import './RecipeItem.scss';

const RecipeItem = ({ imageUrl, title }) => {
	return (
		<React.Fragment>
			<div
				className='recipe-item__img'
				style={{
					backgroundImage:
						`url(${imageUrl}`,
				}}></div>
			<div className='recipe-item__text'>{title}</div>
		</React.Fragment>
	);
};

export default RecipeItem;
