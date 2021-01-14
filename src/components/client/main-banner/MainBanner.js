import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import styles from './MainBanner.module.scss';

const MainBanner = () => {
  return (
    <Box className={styles['main-banner']}>
      <div className="wow bounceInUp">Bình Ngô Đại Chiến</div>
    </Box>
  );
};

export default MainBanner;
