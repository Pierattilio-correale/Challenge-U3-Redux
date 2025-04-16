const initalState = {
  company: {
    content: [],
  },
};

const mainReducer = (state = initalState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITE":
      if (state.company.content.includes(action.payload)) {
        return state;
      }
      return {
        ...state,
        company: {
          ...state.company,
          content: state.company.content.concat(action.payload),
        },
      };
    case "REMOVE_FROM_FAVORITE":
      return {
        ...state,
        company: {
          ...state.company,
          content: state.company.content.filter(
            (name) => name !== action.payload
          ),
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
