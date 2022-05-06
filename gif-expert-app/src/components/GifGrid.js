import React, { useEffect, useState } from 'react';

import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {
	const [images, setImages] = useState([]);

	const getGifs = async () => {
		const url =
			'https://api.giphy.com/v1/gifs/search?q=One+piece&limit=10&api_key=hp1edrgyaxGtEiTCgwfhMArQKp4K4gK4';
		const resp = await fetch(url);
		const { data } = await resp.json();

		const gifs = data.map((img) => {
			return {
				id: img.id,
				title: img.title,
				url: img.images?.downsized_medium.url
			};
		});

		console.log(gifs);
		setImages(gifs);
	};

	useEffect(() => {
		getGifs();
	}, []);

	return (
		<>
			<h3> {category} </h3>
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
