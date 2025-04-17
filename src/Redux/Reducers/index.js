import { ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE } from "../Action";

const savedFavorites = localStorage.getItem("favorites");

const initialState = {
  content: savedFavorites ? JSON.parse(savedFavorites) : [],
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITE:
      if (state.content.includes(action.payload)) {
        return state;
      }
      const updatedAddList = [...state.content, action.payload];
      localStorage.setItem("favorites", JSON.stringify(updatedAddList));
      return {
        ...state,

        content: updatedAddList,
      };

    case REMOVE_FROM_FAVORITE:
      const updatedRemoveList = state.content.filter(
        (name) => name !== action.payload
      );
      localStorage.setItem("favorites", JSON.stringify(updatedRemoveList));
      return {
        ...state,

        content: updatedRemoveList,
      };

    default:
      return state;
  }
};

export default mainReducer;
