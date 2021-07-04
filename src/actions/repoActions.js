import * as types from "../constants/actionTypes";
import axios from "axios";
import { API_URL } from '../constants';

export const shouldFetchRepo = (page = 0) => {
  return dispatch => {    
    dispatch({ type: types.IS_FETCHING });
    axios.get(`${API_URL}/repositories?since=${page}`).then(res => {                          
        dispatch({ type: types.FETCH_REPOS, payload: res });        
      })
      .catch(err => {
        dispatch({type: types.ERROR,message: err.message});
      });
  };
};
