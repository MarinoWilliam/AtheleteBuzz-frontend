import { PAGE_ACTION_TYPES, PAGE_VALUES_TYPE_CLASSES } from "./page.types"
import {
    createAction,
    ActionWithPayload,
    withMatcher,
} from "../../utils/reducer/reducer.utils"


export type SetPageValue = ActionWithPayload<PAGE_ACTION_TYPES.SET_PAGE, PAGE_VALUES_TYPE_CLASSES>
export type toggleIsCollapsed = ActionWithPayload<PAGE_ACTION_TYPES.TOGGLE_IS_COLLAPSED, boolean>


export const setPageValue = withMatcher((pageValue: PAGE_VALUES_TYPE_CLASSES): SetPageValue =>
    createAction(PAGE_ACTION_TYPES.SET_PAGE, pageValue))


export const toggleisCollapsed = withMatcher((isColapsed: boolean): toggleIsCollapsed =>
    createAction(PAGE_ACTION_TYPES.TOGGLE_IS_COLLAPSED, isColapsed))



