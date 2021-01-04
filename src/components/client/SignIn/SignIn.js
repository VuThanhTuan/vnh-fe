import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputAdornment from '@material-ui/core/InputAdornment';
import LockIcon from '@material-ui/icons/Lock';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import { Formik, Form, Field } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import Input from '../../form/input';
import SignInValidation from './validation';
import appTheme from '../../../theme';
import styles from './SignIn.module.scss';

const Transition = React.forwardRef((props, ref) => (
  <Slide direction="up" ref={ref} {...props} />
));

const useStyles = makeStyles({
  errorMessage: {
    color: appTheme.palette.color2,
  },
  loginTitle: {
    color: appTheme.palette.color6,
    fontSize: appTheme.palette.bigSize,
  },
});

function SignIn(props) {
  // eslint-disable-next-line no-unused-vars
  const { loginErrorMessage, setLoginErrorMessage } = useState();
  // eslint-disable-next-line react/prop-types
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  // eslint-disable-next-line no-unused-vars
  const [value, setValue] = React.useState(0);

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
  const loginFunc = (values) => {
    console.log('===', values);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
      aria-labelledby="form-dialog-title"
    >
      <div className={`dialog-container ${styles.dialogContainer}`}>
        <h3 className={classes.loginTitle}>Đăng nhập</h3>
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
                  <Grid item xs={12} className={styles.loginAction}>
                    <Button variant="contained" color="primary" type="submit">
                      Đăng Nhập
                    </Button>
                  </Grid>
                </Grid>
              </Form>
            );
          }}
        </Formik>
      </div>
    </Dialog>
  );
}

export default SignIn;
