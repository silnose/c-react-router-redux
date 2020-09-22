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

//INFO: redux-thunk - return function
// export const setFavorite = (payload) => (dispatch) => {
//   dispatch({
//     type: SET_FAVORITE,
//     payload: payload,
//   });
// };

//INFO: redux return plain js object
export const setFavorite = (payload) => ({
  type: SET_FAVORITE,
  payload,
});

//INFO: redux return plain js object
export const deleteFavorite = (payload) => ({
  type: DELETE_FAVORITE,
  payload,
});

//INFO: redux return plain js object
export const login = (payload) => ({
  type: LOGIN_REQUEST,
  payload,
});

//INFO: redux return plain js object
export const logout = (payload) => ({
  type: LOGOUT_REQUEST,
  payload,
});

//INFO: redux return plain js object
export const register = (payload) => ({
  type: REGISTER_REQUEST,
  payload,
});

//INFO: redux-thunk - return function
export const getVideo = (videoId) => (dispatch, getState) => {
  const { trends, mylist, originals } = getState();
  const search =
    trends.find((item) => item.id === Number(videoId.id)) ||
    mylist.find((item) => item.id === Number(videoId.id)) ||
    originals.find((item) => item.id === Number(videoId.id)) ||
    [];

  dispatch({
    type: GET_VIDEO_SOURCE,
    payload: search,
  });
};

export const search = (query) => (dispatch, getState) => {
  const { trends, originals } = getState();
  const videos = [...trends, ...originals];
  const search = videos.filter((item) => {
    return item.title.toLowerCase().includes(query.toLowerCase());
  });

  dispatch({
    type: SEARCH_REQUEST,
    payload: search,
  });
};

export const clearSearch = (payload) => ({
  type: CLEAR_SEARCH,
  payload,
});
