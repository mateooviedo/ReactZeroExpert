import React from 'react';
import GifGridItem from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

const GifGrid = ({ category }) => {
	const { data: images, loading } = useFetchGifs(category);

	return (
		<>
			<h3> {category} </h3>
			{loading ? <p>Loading</p> : null}
			<div>
				<ul className="card-grid">
					{images.map((img) => (
						<GifGridItem key={img.id} {...img} />
					))}
				</ul>
			</div>
		</>
	);
};

export default GifGrid;
