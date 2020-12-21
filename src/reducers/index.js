import empReducer from "./employeeReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  empReducer,
});

export default rootReducer;
