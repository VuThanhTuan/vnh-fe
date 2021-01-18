import { Box } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import MainBanner from '../src/components/client/main-banner/MainBanner';
import PostSlide from '../src/components/client/post-slide/PostSlide';
import Layout from '../src/layouts/client/home-layout/Layout';
// import them from '../src/theme';



export default function Home() {
  // eslint-disable-next-line no-unused-vars
  const counter = useSelector((state) => state.count);

  return (
    // <Layout
    //   banner={<MainBanner />}
    //   content={
    //     <Box>
    //       <PostSlide />
    //     </Box>
    //   }
    // />
    <PostSlide />
  );
}
