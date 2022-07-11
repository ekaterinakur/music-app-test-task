import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAlbums, setLoadingStatus } from '../redux/actions';
import Loader from './Loader';
import AlbumItem from './AlbumItem';

const AlbumList = () => {
  const dispatch = useDispatch();
  const albums = useSelector(store => store.albums);
  const isLoading = useSelector(store => store.isLoading);

  useEffect(() => {
    dispatch(setLoadingStatus(true));

    const fakeRequestTimeout = setTimeout(
      () => {
        dispatch(getAlbums());
      },
      1000
    );

    return () => clearTimeout(fakeRequestTimeout);
  }, [dispatch]);

  return <>
    {isLoading
      ? <Loader />
      : <div className="album-list-container flex-container">
          {albums.map(album =>
            <AlbumItem key={album.id} album={album} />
          )}
        </div>
    }
  </>
}

export default AlbumList;
