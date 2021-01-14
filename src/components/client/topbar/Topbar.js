/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useRef } from 'react';
import Container from '@material-ui/core/Container';
import { useSelector } from 'react-redux';
import Icon from '@material-ui/core/Icon';
import SignIn from '../signin/SignIn';
import styles from './Topbar.module.scss';
// const ColorButton = withStyles(() => ({
//   root: {
//     color: '#fff',
//   },
// }))(Button);

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
        <div className={styles.topMenuDiv}>
          <div className={styles.spaceTitle} />
          <Icon
            className={`far fa-user ${styles.pageAction}`}
            onClick={login}
          />
          {/* <b
            className={`${styles.pageAction} ${styles.signInLink}`}
            onClick={login}
          >
            Đăng nhập
          </b> */}
          {/* <ColorButton
            className={styles.pageAction}
            color="primary"
            size="small"
          >
            Đăng ký
          </ColorButton> */}
          <SignIn open={open} onClose={handleClose} />
        </div>
      </Container>
    </div>
  );
};

export default TopBar;
