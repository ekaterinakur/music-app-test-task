import React from 'react';
import { Link } from 'react-router-dom';
import WaveSVG from './WaveSVG';

const AlbumItem = ({
	album
}) => (
	<div className="flex-col">
		<Link
			to={`/albums/${album.id}/songs`}
			className='album-container'
			style={{ backgroundImage: `url(${album.image})` }}
		>
			<WaveSVG />
			<div className="album-name">{ album.name }</div>
		</Link>
	</div>
);

export default AlbumItem;
