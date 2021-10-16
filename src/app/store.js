import { createStore } from "redux";
import rootReducer from "../Features/userSlice";

export const store = createStore(rootReducer);
