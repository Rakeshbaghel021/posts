import axios from "axios";
import {
  DATA_FETCH_FAIL,
  DATA_FETCH_INIT,
  DATA_FETCH_SUCCESS,
} from "../types/types";

export const dataFetchInit = () => {
  return {
    type: DATA_FETCH_INIT,
  };
};
export const dataFetchSuccess = (payload) => {
  return {
    type: DATA_FETCH_SUCCESS,
    posts: payload,
  };
};
export const dataFetchFail = (error) => {
  return {
    type: DATA_FETCH_FAIL,
    error: error,
  };
};

export const PostDatas = (setterm) => {
  return (dispatch) => {
    dispatch(dataFetchInit());
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => dispatch(dataFetchSuccess(res.data)))
      .then((res) => setterm(res.posts))

      .catch((error) => {
        dispatch(dataFetchFail(true));
      });
  };
};
