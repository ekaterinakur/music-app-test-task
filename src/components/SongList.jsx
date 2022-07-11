import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSongs, setLoadingStatus, setPlayedSong } from '../redux/actions';
import Loader from './Loader';
import Player from './Player';
import SongItem from './SongItem';

const SongList = () => {
  const { albumId } = useParams();
	const dispatch = useDispatch();
  const songs = useSelector(store => store.songs);
  const playedSong = useSelector(store => store.playedSong);
  const isLoading = useSelector(store => store.isLoading);

  useEffect(() => {
    setLoadingStatus(true);

		const fakeRequestTimeout = setTimeout(
      () => {
        dispatch(getSongs(albumId));
      },
      1500
    );

    return () => clearTimeout(fakeRequestTimeout);
  }, [dispatch, albumId]);

	const handlePlaySong = song => {
		dispatch(setPlayedSong(song));
	};

  return <>
      <Player />

      {isLoading
        ? <Loader />
        : (songs.map(song =>
          <SongItem
            key={song.id} 
            song={song}
            isPlayed={playedSong && song.id === playedSong.id}
            handlePlaySong={handlePlaySong} 
          />
        ))}
  </>
}

export default SongList;
