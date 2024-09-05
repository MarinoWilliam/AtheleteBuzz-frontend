import { createSelector } from "reselect";
import { RootState } from "../store";
import { PageState } from "./page.reducer";

const pageReducerSelector = (state:RootState):PageState =>  state.page


export const selectPage = createSelector(
    [pageReducerSelector],
    (pageSlice) => pageSlice.pageValue
)

export const selectIsCollapse = createSelector(
    [pageReducerSelector],
    (pageSlice) => pageSlice.isColapsed
)









