import { combineReducers } from "redux";
import Auth from "./auth";
import Content from "./content";

const reducers = combineReducers({
  Auth,
  Content,
});

export default reducers;
