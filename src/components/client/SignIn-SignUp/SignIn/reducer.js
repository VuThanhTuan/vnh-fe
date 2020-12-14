/* eslint-disable no-param-reassign */
import produce from 'immer';
import { LOGIN_SUCCESS } from './constants';

export const loginInitState = {
  form: {
    username: 'admin',
    password: 'Admin@123',
  },
  isLoggedIn: false,
};

/* eslint-disable default-case, no-param-reassign */
const loginReducer = (state = loginInitState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOGIN_SUCCESS:
        draft.isLoggedIn = true;
        break;
    }
  });

export default loginReducer;
