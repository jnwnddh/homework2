import { createStore } from "redux";
import { combineReducers } from "redux";
import todos from "../redux/reducer/reducer";
//다묶어주는 combine리듀서
const rootReducer = combineReducers({
  todos,
});
const store = createStore(rootReducer);

export default store;
