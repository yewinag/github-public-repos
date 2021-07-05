import * as types from "../constants/actionTypes";
import axios from "axios";
import { API_URL } from "../constants";
import { getPaginatedList } from "../utils/peginatedHelper";

export const shouldFetchRepo = (page = 0) => {
  return (dispatch) => {
    dispatch({ type: types.IS_FETCHING });
    axios
      .get(`${API_URL}/repositories?since=${page}`)
      .then((res) => {
        dispatch({ type: types.FETCH_REPOS, payload: res });
      })
      .catch((err) => {
        dispatch({ type: types.ERROR, message: err.message });
      });
  };
};

export const shouldPaginate = (current_page) => {
  return (dispatch, getState) => {
    dispatch({ type: types.IS_FETCHING });
    setTimeout(() => {
      dispatch({
        type: types.PAGINATED_MORE,
        payload: getPaginatedList(getState().repos.data, current_page),
        current_page: current_page,
      });
    }, 1000);
  };
};
