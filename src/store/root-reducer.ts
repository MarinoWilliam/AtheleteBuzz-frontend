import { combineReducers } from "redux";

import { pageReducer } from "./page/page.reducer";

export const rootReducer = combineReducers({
    page:pageReducer,
})