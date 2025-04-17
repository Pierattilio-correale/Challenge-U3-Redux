import { FETCH_ARRAY_ACTION, FETCH_ARRAY_IS_LOADING } from "../Action";

const initialState = {
  fetch: [],
  isLoading: false,
};

const fetchArrayReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARRAY_IS_LOADING:
      return {
        ...state,
        isLoading: true,
      };

    case FETCH_ARRAY_ACTION:
      return {
        ...state,
        fetch: action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
};
export default fetchArrayReducer;
