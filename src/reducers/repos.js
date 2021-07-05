import * as types from "../constants/actionTypes";
import { getPaginatedList } from "../utils/peginatedHelper";
const INITIAL_STATE = {
  page: 0,
  per_page: 10,
  total: 0,
  data:[]
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
          data: [...state.data, ...action.payload.data],
          page: state.page + 1,
          total: state.total + action.payload.data.length,
          paginated: getPaginatedList(action.payload.data, 0, state.per_page)
        },
      };
    case types.PAGINATED_MORE:
      return {
        ...state,
        ...{
          isFetching: false,
          data: state.data,
          page: action.current_page,
          total: state.total,
          paginated: action.payload
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
