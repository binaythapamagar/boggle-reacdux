import {createStore} from "redux";
import rootReducer from "../reducers/index";

//root store with application reducers for application
const store = createStore(rootReducer);

export default store;
