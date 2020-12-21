import { countActionTypes } from './action';

const appInitialState = {
  count: 1222,
};

export default function reducer(state = appInitialState, action) {
  switch (action.type) {
    case countActionTypes.ADD:
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
}
