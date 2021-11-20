import { combineReducers } from "redux";
import { questionReducer } from "./questionsReducer";
const combinedReducer = combineReducers({
  questions: questionReducer,
});

export default combinedReducer;
