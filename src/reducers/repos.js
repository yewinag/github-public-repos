import * as types from "../constants/actionTypes";
import { getPaginatedList } from "../utils/peginatedHelper";
const INITIAL_STATE = {
  page: 0,
  per_page: 10
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.IS_FETCHING:
      return {
        ...state,
        ...{ isFetching: true },
      };
    case types.FETCH_REPOS:
      return {
        ...state,
        ...{
          isFetching: false,
          data: action.payload.data,
          page: state.page + 1,
          paginated: getPaginatedList(action.payload.data, state.per_page)
        },
      };
    case types.ERROR:
      return {
        ...state,
        ...{
          isFetching: false,
          message: action.message,
        },
      };
    default:
      return state;
  }
};
