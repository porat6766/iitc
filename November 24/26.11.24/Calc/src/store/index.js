import { createStore } from "redux";
import CalcReducer from "./redusers/calcReducer.js";

export const store = createStore(CalcReducer);
