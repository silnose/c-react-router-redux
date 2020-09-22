import {
  SET_FAVORITE,
  DELETE_FAVORITE,
  LOGIN_REQUEST,
  LOGOUT_REQUEST,
  REGISTER_REQUEST,
  GET_VIDEO_SOURCE,
  SEARCH_REQUEST,
  CLEAR_SEARCH,
} from '../types';

const reducer = (state, action) => {
  switch (action.type) {
    case SET_FAVORITE:
      return { ...state, mylist: [...state.mylist, action.payload] };
    case DELETE_FAVORITE:
      return {
        ...state,
        mylist: state.mylist.filter((items) => items.id !== action.payload),
      };
    case LOGIN_REQUEST:
      return { ...state, user: action.payload };
    case LOGOUT_REQUEST:
      return { ...state, user: {} };
    case REGISTER_REQUEST:
      return { ...state, user: action.payload };
    case GET_VIDEO_SOURCE:
      return { ...state, playing: action.payload };
    case SEARCH_REQUEST:
      return { ...state, searchResult: action.payload };
    case CLEAR_SEARCH:
      console.log('clean');
      return { ...state, searchResult: [] };
    default:
      return state;
  }
};
export default reducer;
