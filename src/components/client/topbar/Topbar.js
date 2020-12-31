import React, { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { useSelector } from 'react-redux';
import SignIn from '../signin/SignIn';
import styles from './Topbar.module.scss';

const TopBar = () => {
  // eslint-disable-next-line no-unused-vars
  const counter = useSelector((state) => state.count);
  const [open, setOpen] = React.useState(false);
  const headerElm = useRef(null);

  const handleScroll = () => {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      headerElm.current.classList.add(styles.scroll);
    } else {
      headerElm.current.classList.remove(styles.scroll);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  const login = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div ref={headerElm} className={styles.topMenu}>
      <Container>
        <div>
          <h1 className={styles.pageTitle}>VNH</h1>
          <Button className={styles.pageAction} onClick={login} color="primary">
            Đăng nhập
          </Button>
          <SignIn open={open} onClose={handleClose} />
        </div>
      </Container>
    </div>
  );
};

export default TopBar;
