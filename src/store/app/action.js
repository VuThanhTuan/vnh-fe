export const countActionTypes = {
  ADD: 'ADD',
};

export const addCount = () => (dispatch) =>
  dispatch({ type: countActionTypes.ADD });
