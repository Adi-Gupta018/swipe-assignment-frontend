import { combineReducers } from "@reduxjs/toolkit";
import invoicesReducer from "./invoicesSlice"; // Import your other reducers
import itemsReducer from "./itemSlice";

const rootReducer = combineReducers({
  invoices: invoicesReducer,
  items: itemsReducer,
});

export default rootReducer;
