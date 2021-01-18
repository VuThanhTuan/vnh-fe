import { Box } from '@material-ui/core';
import React, { useRef } from 'react';
import Icon from '@material-ui/core/Icon';
import styles from './PostSilde.module.scss';

// const items = [
//   {
//     image: '/images/idesign_vietsukieuhung_01',
//     postUrl: 'test',
//   },
// ];

const PostSlide = () => {
  const slideChildContainer = useRef(null);
  let position = 0;

  const srcollRight = () => {
    // console.log('object', slideChildContainer.current.style.left);
    // slideChildContainer.current.style.left = '-300px';
    // slideLeft.current -= 10;
    position -= 10;
    console.log('object', position, slideChildContainer.current.style.right);
    slideChildContainer.current.style.left = `${position}%`;
  };

  const srcollLeft = () => {
    position += 10;
    slideChildContainer.current.style.left = `${position}%`;
  };

  return (
    <Box component="div" className={styles.slideContainer}>
      <Box onClick={() => srcollLeft()}>
        <Icon className="fas fa-chevron-left" />
      </Box>

      <Box component="div" className={styles.slideItemContainer}>
        <Box
          component="div"
          ref={slideChildContainer}
          className={styles.slideChildContainer}
        >
          <Box component="div" className={styles.slideItem}>
            <img alt="test" src="/images/idesign_vietsukieuhung_01.webp" />
          </Box>
          <Box component="div" className={styles.slideItem}>
            <img alt="test" src="/images/idesign_vietsukieuhung_01.webp" />
          </Box>
          <Box component="div" className={styles.slideItem}>
            <img alt="test" src="/images/idesign_vietsukieuhung_01.webp" />
          </Box>
          <Box component="div" className={styles.slideItem}>
            <img alt="test" src="/images/idesign_vietsukieuhung_01.webp" />
          </Box>
          <Box component="div" className={styles.slideItem}>
            <img alt="test" src="/images/idesign_vietsukieuhung_01.webp" />
          </Box>
          <Box component="div" className={styles.slideItem}>
            <img alt="test" src="/images/idesign_vietsukieuhung_01.webp" />
          </Box>
          <Box component="div" className={styles.slideItem}>
            <img alt="test" src="/images/idesign_vietsukieuhung_01.webp" />
          </Box>
        </Box>
      </Box>

      <Box onClick={() => srcollRight()}>
        <Icon className="fas fa-chevron-right" />
      </Box>
    </Box>
  );
};

export default PostSlide;
