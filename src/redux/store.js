import { createStore } from "redux";

const initailState = {
  data: "List.jsx",
};
const rootReducer = (state = initailState, action) => {
  switch (action.type) {
    case "SELECT_DATA":
      return {
        ...state,
        data: Select.payload,
      };
    default:
      return state;
  }
};

export default createStore(rootReducer);
