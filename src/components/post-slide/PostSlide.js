import { Box } from '@material-ui/core';
import React from 'react';

const items = [
  {
    image: '/images/idesign_vietsukieuhung_01',
    postUrl: 'test',
  },
];

const PostSlide = () => {
  return (
    <Box component="div">
      <Box component="div">
        <img alt="test" src="/images/idesign_vietsukieuhung_01.webp" />
      </Box>
    </Box>
  );
};

export default PostSlide;
