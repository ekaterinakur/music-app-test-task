import React from 'react';
import { DEFAULT_SONG_IMAGE } from '../constants';

const SongInfo = ({
	song,
	size
}) => <>
	<div className={`song-info-container ${size}`}>
		<div
			className="song-image"
			style={{ backgroundImage: `url(${(song.image || DEFAULT_SONG_IMAGE)})` }}
		></div>
		<div className='song-info'>
			<div className="song-name">{ song.name }</div>
			<div className="song-author">{ song.author }</div>
		</div>
	</div>
</>;

export default SongInfo;
