import { all, call, put, takeLeading } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import * as actions from './action';
import * as constants from './constants';
import request, { createRequest } from '../../../../utils/request';
const APIs = {
  login: `api/account/Login`,
};

function* loginSaga(action) {
  const body = {
    userName: action.payload.userName,
    password: action.payload.password,
  };

  const options = createRequest('POST', body);
  const login = yield call(request, APIs.login, options);
  if (login.statusCode === 400) {
    yield put(actions.loginFailed(login.message));
  } else {
    yield put(actions.loginSuccess(login));
    yield put(push('/admin'));
  }
}

export default function* sagaWatcher() {
  yield takeLeading(constants.LOGIN, loginSaga);
}
