const initialState = {
  empList: [],
  searchText: "",
};
const empReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_EMP_LIST":
      return { ...state, empList: action.payload };
    default:
      return state;
  }
};
export default empReducer;
