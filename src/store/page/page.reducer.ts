import { AnyAction } from '@redux-saga/core';
import { PAGE_VALUES_TYPE_CLASSES } from './page.types';

import {
    setPageValue,
    toggleisCollapsed
} from './page.action';


export type PageState = {
    pageValue: PAGE_VALUES_TYPE_CLASSES,
    isColapsed: boolean
};

const PAGE_STATE: PageState = {
    pageValue: PAGE_VALUES_TYPE_CLASSES.home,
    isColapsed: false
  }



export const pageReducer = (
    state = PAGE_STATE,
    action : AnyAction
): PageState => {
    if (setPageValue.match(action)) {
        return { ...state,   pageValue : action.payload};
    }
    if (toggleisCollapsed.match(action)) {
        return { ...state,   isColapsed : action.payload};
    }

    return state
}







