import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import appTheme from '../../../theme';
import SignIn from '../../../components/client/signin/SignIn';
import styles from './Topbar.module.scss';

const TopBar = () => {
  // eslint-disable-next-line no-unused-vars
  const counter = useSelector((state) => state.count);
  const [open, setOpen] = React.useState(false);
  // const classes = useStyles();

  const login = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className={styles.topMenu}>
      <Container>
        <div>
          <Button onClick={login} color="primary">
            Đăng nhập
          </Button>
          <SignIn open={open} onClose={handleClose} />
        </div>
      </Container>
    </div>
  );
};

export default TopBar;
