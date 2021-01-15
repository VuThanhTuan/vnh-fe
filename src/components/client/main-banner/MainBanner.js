import React, { useEffect, useRef } from 'react';
import Box from '@material-ui/core/Box';
import styles from './MainBanner.module.scss';

const MainBanner = () => {
  const titleElm = useRef(null);

  const handleScroll = () => {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      titleElm.current.classList.add('fadeOutUp');
    } else {
      titleElm.current.classList.remove('fadeOutUp');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  return (
    <Box className={styles['main-banner']}>
      <div ref={titleElm} className="animated fadeInDown">
        Bình Ngô Đại Chiến
      </div>
    </Box>
  );
};

export default MainBanner;
