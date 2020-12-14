import { createStore, combineReducers } from "redux";
import { HYDRATE, createWrapper } from "next-redux-wrapper";
import count from "./app/reducer";

const combinedReducer = combineReducers({
  count,
});

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    if (state.count.count) nextState.count.count = state.count.count; // preserve count value on client side navigation
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

const initStore = () => {
  return createStore(reducer);
};

export const wrapper = createWrapper(initStore);
