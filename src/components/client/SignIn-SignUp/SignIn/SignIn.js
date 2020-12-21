import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputAdornment from '@material-ui/core/InputAdornment';
import LockIcon from '@material-ui/icons/Lock';
import Button from '@material-ui/core/Button';
import './SignIn.module.scss';
import { Formik, Form, Field } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import Input from '../../../Form/Input';
import SignInValidation from './validation';
import appTheme from '../../../../theme';

const useStyles = makeStyles({
  errorMessage: {
    color: appTheme.palette.color2,
  },
});

function SignIn() {
  // eslint-disable-next-line no-unused-vars
  const { loginErrorMessage, setLoginErrorMessage } = useState();

  const classes = useStyles();
  const makeFormAttr = (pr) => ({
    userName: {
      name: 'userName',
      label: 'Tài khoản',
      type: 'text',
      component: Input,
      value: pr.values.userName,
      onChange: pr.handleChange,
      error: pr.errors.userName,
      startAdornment: (
        <InputAdornment position="start">
          <AccountCircle />
        </InputAdornment>
      ),
    },
    password: {
      name: 'password',
      label: 'Mật khẩu',
      type: 'password',
      component: Input,
      value: pr.values.password,
      onChange: pr.handleChange,
      error: pr.errors.password,
      startAdornment: (
        <InputAdornment position="start">
          <LockIcon />
        </InputAdornment>
      ),
    },
  });

  // eslint-disable-next-line no-unused-vars
  const loginFunc = (value) => {};

  return (
    <Formik
      initialValues={{
        userName: 'admin',
        password: 'Admin@123',
      }}
      onSubmit={(values) => {
        // await new Promise(r => setTimeout(r, 500));
        // alert(JSON.stringify(values, null, 2));
        loginFunc(values);
      }}
      validationSchema={SignInValidation}
    >
      {(pr) => {
        const formAttr = makeFormAttr(pr);
        return (
          <Form>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Field {...formAttr.userName} />
              </Grid>
              <Grid item xs={12}>
                <Field {...formAttr.password} />
              </Grid>
              {loginErrorMessage ? (
                <Grid item xs={12}>
                  <div className={classes.errorMessage}>
                    {loginErrorMessage}
                  </div>
                </Grid>
              ) : null}
              <Grid className="footer">
                <Button variant="contained" color="primary" type="submit">
                  Đăng Nhập
                </Button>
              </Grid>
            </Grid>
          </Form>
        );
      }}
    </Formik>
  );
}

export default SignIn;
