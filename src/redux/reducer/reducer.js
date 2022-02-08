import {
  DATA_FETCH_FAIL,
  DATA_FETCH_INIT,
  DATA_FETCH_SUCCESS,
} from "../types/types";

const initialState = {
  posts: [],
  isLoading: false,
  error: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA_FETCH_INIT:
      return {
        ...state,
        isLoading: true,
        error: false,
      };
    case DATA_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        posts: action.posts,
      };
    case DATA_FETCH_FAIL:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};

export default reducer;
