import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Formik, Form, Field } from 'formik';
import Input from '../../../form/input';

const Signup = () => {
  const makeFormAttr = (pr) => ({
    userName: {
      name: 'userName',
      label: 'Tài khoản',
      type: 'text',
      component: Input,
      value: pr.values.userName,
      onChange: pr.handleChange,
    },
    password: {
      name: 'password',
      label: 'Mật khẩu',
      type: 'password',
      component: Input,
      value: pr.values.password,
      onChange: pr.handleChange,
    },
    rePassword: {
      name: 'rePassword',
      label: 'Xác nhận mật khẩu',
      type: 'password',
      component: Input,
      value: pr.values.rePassword,
      onChange: pr.handleChange,
    },
    email: {
      name: 'email',
      label: 'Email',
      type: 'text',
      component: Input,
      value: pr.values.email,
      onChange: pr.handleChange,
    },
    address: {
      name: 'address',
      label: 'Địa chỉ',
      type: 'text',
      component: Input,
      value: pr.values.address,
      onChange: pr.handleChange,
    },
  });

  return (
    <Formik
      initialValues={{
        userName: '',
        password: '',
        rePassword: '',
        email: '',
        address: '',
      }}
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
              <Grid item xs={12}>
                <Field {...formAttr.rePassword} />
              </Grid>
              <Grid item xs={12}>
                <Field {...formAttr.email} />
              </Grid>
              <Grid item xs={12}>
                <Field {...formAttr.address} />
              </Grid>
              <Grid className="footer">
                <Button variant="contained" color="primary" type="submit">
                  Đăng Ký
                </Button>
              </Grid>
            </Grid>
          </Form>
        );
      }}
    </Formik>
  );
};

export default Signup;
