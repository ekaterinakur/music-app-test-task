import { mockedAlbums } from '../mock/mockedAlbums';
import { mockedSongs } from '../mock/mockedSongs';

export const SET_ALBUM_LIST = 'SET_ALBUM_LIST';
export const SET_SONG_LIST = 'SET_SONG_LIST';
export const SET_PLAYED_SONG = 'SET_PLAYED_SONG';
export const SET_LOADING_STATUS = 'SET_LOADING_STATUS';
export const SET_FAVOURITE_STATUS ='SET_FAVOURITE_STATUS';
export const SET_PREV_SONG = 'SET_PREV_SONG';
export const SET_NEXT_SONG = 'SET_NEXT_SONG';

export function getAlbums() {
  return function(dispatch) {
    Promise.resolve(mockedAlbums)
      .then(res => {
        dispatch({
          type: SET_ALBUM_LIST,
          payload: res
        });
      })
      .catch(err => console.error(err))
      .finally(() => {
        dispatch({
          type: SET_LOADING_STATUS,
          payload: false
        });
      });
  }
};

export function getSongs(albumId) {
  return function(dispatch) {
    Promise.resolve(mockedSongs)
      .then(res => {
        dispatch({
          type: SET_SONG_LIST,
          payload: res
        });
      })
      .catch(err => console.error(err))
      .finally(() => {
        dispatch({
          type: SET_LOADING_STATUS,
          payload: false
        });
      });
  }
};

export function setPlayedSong(song) {
  return function(dispatch) {
    dispatch({
      type: SET_PLAYED_SONG,
      payload: song
    });
  }
};

export function setLoadingStatus(isLoading) {
  return function(dispatch) {
    dispatch({
      type: SET_LOADING_STATUS,
      payload: isLoading
    });
  }
};

export function setFavouriteStatus(payload) {
  return function(dispatch) {
    dispatch({
      type: SET_FAVOURITE_STATUS,
      payload
    });
  }
};

export function setPrevSong() {
  return function(dispatch) {
    dispatch({
      type: SET_PREV_SONG
    });
  }
};

export function setNextSong() {
  return function(dispatch) {
    dispatch({
      type: SET_NEXT_SONG
    });
  }
};
