import { generalType } from '../utils/actionTypes';

export const setActiveTab = (payload, dispatch) =>
  dispatch({ type: generalType.SET_ACTIVE_TAB, payload });

export const setSearchQuery = (value, dispatch) =>
  dispatch({ type: generalType.SET_SEARCH_QUERY, payload: value });

export const setSelectedLocation = (payload, dispatch) =>
  dispatch({ type: generalType.SET_SELECTED_LOCAION, payload });

export const setSelectedMaxPrice = (payload, dispatch) =>
  dispatch({ type: generalType.SET_MAX_PRICE, payload });
