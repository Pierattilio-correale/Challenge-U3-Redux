export const ADD_TO_FAVORITE = "ADD_TO_FAVORITE";
export const REMOVE_FROM_FAVORITE = "REMOVE_FROM_FAVORITE";
export const FETCH_ARRAY_ACTION = "FETCH_ARRAY_ACTION";
export const FETCH_ARRAY_IS_LOADING = "FETCH_ARRAY_IS_LOADING";
export const FETCH_ARRAY_IS_ERROR = "FETCH_ARRAY_IS_ERROR";

export const addToFavoriteAction = (prova) => {
  return {
    type: ADD_TO_FAVORITE,
    payload: prova,
  };
};
export const removeFromFavoriteAction = (companyName) => {
  return {
    type: REMOVE_FROM_FAVORITE,
    payload: companyName,
  };
};

export const fetchArrayAction = (query) => {
  return async (dispatch) => {
    const baseEndpoint =
      "https://strive-benchmark.herokuapp.com/api/jobs?search=";
    dispatch({ type: FETCH_ARRAY_IS_LOADING });
    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");

      if (response.ok) {
        const { data } = await response.json();
        dispatch({
          type: FETCH_ARRAY_ACTION,
          payload: data,
        });
      } else {
        throw new Error("errore nella promis");
      }
    } catch (error) {
      dispatch({
        type: FETCH_ARRAY_IS_ERROR,
      });
    }
  };
};
