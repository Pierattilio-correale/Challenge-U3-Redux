const savedFavorites = localStorage.getItem("favorites");

const initialState = {
  company: {
    content: savedFavorites ? JSON.parse(savedFavorites) : [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITE":
      if (state.company.content.includes(action.payload)) {
        return state;
      }
      const updatedAddList = [...state.company.content, action.payload];
      localStorage.setItem("favorites", JSON.stringify(updatedAddList));
      return {
        ...state,
        company: {
          ...state.company,
          content: updatedAddList,
        },
      };

    case "REMOVE_FROM_FAVORITE":
      const updatedRemoveList = state.company.content.filter(
        (name) => name !== action.payload
      );
      localStorage.setItem("favorites", JSON.stringify(updatedRemoveList));
      return {
        ...state,
        company: {
          ...state.company,
          content: updatedRemoveList,
        },
      };

    default:
      return state;
  }
};

export default mainReducer;
