import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setNextSong, setPrevSong } from '../redux/actions';
import FavouriteButton from './FavouriteButton';
import SongInfo from './SongInfo';

const Player = () => {
	const dispatch = useDispatch();
	const playedSong = useSelector(store => store.playedSong);

	const handlePrev = () => {
		dispatch(setPrevSong());
	};

	const handleNext = () => {
		dispatch(setNextSong());
	};

	const handlePlay = () => {

	};

	return <div className='player-container'>
		<div className="player-song-info flex">
			{playedSong 
				? <>
						<SongInfo song={playedSong} size='large' />
						<FavouriteButton songId={playedSong.id} isFavourite={playedSong.isFavourite} />
					</>
				: <div className="player-empty">
						Choose your mood...
					</div>
			}
		</div>
		<div className="player-progress">
			<span className='player-progress-dot'></span>
		</div>
		<div className="player-actions flex">
			<button 
				className="player-btn player-btn-prev" 
				onClick={handlePrev}
				disabled={!playedSong}
			></button>
			<button 
				className="player-btn player-btn-play" 
				onClick={handlePlay}
				disabled={!playedSong}
			></button>
			<button 
				className="player-btn player-btn-next" 
				onClick={handleNext}
				disabled={!playedSong}
			></button>
		</div>
	</div>
};

export default Player;
