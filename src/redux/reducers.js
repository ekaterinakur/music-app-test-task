import { 
  SET_ALBUM_LIST, 
  SET_SONG_LIST, 
  SET_PLAYED_SONG, 
  SET_LOADING_STATUS,
  SET_FAVOURITE_STATUS,
  SET_PREV_SONG,
  SET_NEXT_SONG
} from "./actions";

const initialState = {
  albums: [],
  songs: [],
  playedSong: null,
  isLoading: false
};

export function getNextState(state = initialState, action) {
  switch (action.type) {
    case SET_ALBUM_LIST:
      return {
        ...state,
        albums: action.payload
      };
    case SET_SONG_LIST:
      return {
        ...state,
        songs: action.payload
      };
    case SET_PLAYED_SONG: 
      return {
        ...state,
        playedSong: action.payload
      };
    case SET_FAVOURITE_STATUS:
      const songsCopy = [ ...state.songs ];
      const favouriteIndex = songsCopy.findIndex(song => song.id === action.payload.songId);
      if (favouriteIndex) {
        songsCopy[favouriteIndex].isFavourite = action.payload.isFavourite;
      }

      return {
        ...state,
        songs: songsCopy,
        playedSong: {
          ...state.playedSong,
          isFavourite: action.payload.isFavourite
        }
      }
    case SET_LOADING_STATUS:
      return {
        ...state,
        isLoading: action.payload
      };
    case SET_PREV_SONG:
      const currentIndex = state.songs.findIndex(song => song.id === state.playedSong.id);
      let prevSongIndex;
      if (currentIndex) {
        prevSongIndex = currentIndex > 0 ? (currentIndex - 1) : (state.songs.length - 1);
      }

      return {
        ...state,
        playedSong: state.songs[prevSongIndex]
      }
    case SET_NEXT_SONG:
      const playedSongIndex = state.songs.findIndex(song => song.id === state.playedSong.id);
      let nextSongIndex;
      if (playedSongIndex) {
        nextSongIndex = playedSongIndex === state.songs.length ? 0 : (playedSongIndex + 1);
      }

      return {
        ...state,
        playedSong: state.songs[nextSongIndex]
      }
    default:
      return state;
  }
}
