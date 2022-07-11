import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFavouriteStatus } from '../redux/actions';

const FavouriteButton = () => {
	const dispatch = useDispatch();
	const playedSong = useSelector(state => state.playedSong);

	const toggleFavourite = () => {
		dispatch(setFavouriteStatus({
			songId:      playedSong.id,
			isFavourite: !playedSong.isFavourite
		}));
	};

	return (
		<button
			className='player-btn-favourite'
			onClick={toggleFavourite}
			style={{ backgroundImage: `url('/music-app-test-task/media/${playedSong.isFavourite ? 'heart-full' : 'heart'}.svg')` }}
		></button>
	);
};

export default FavouriteButton;
