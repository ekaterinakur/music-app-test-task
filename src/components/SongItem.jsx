import React from 'react';
import SongInfo from './SongInfo';

const SongItem = ({
	song,
	isPlayed,
	handlePlaySong
}) => (
	<div className={`song-container${isPlayed ? ' song-active' : ''}`}>
		<SongInfo song={song} size='small' />
		<div className='song-actions'>
			{song.isFavourite && (
				<div className='song-favourite'></div>
			)}
			<button
				className='button-play'
				onClick={() => handlePlaySong(song)}
			></button>
		</div>
	</div>
);

export default SongItem;
