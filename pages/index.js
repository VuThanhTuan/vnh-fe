/* eslint-disable react/no-unescaped-entities */
import { Box } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import MainBanner from '../src/components/client/main-banner/MainBanner';
import PostSlide from '../src/components/post-slide/PostSlide';
import Layout from '../src/layouts/client/home-layout';

export default function Home() {
  // eslint-disable-next-line no-unused-vars
  const counter = useSelector((state) => state.count);

  return (
    <Layout
      banner={<MainBanner />}
      content={
        <Box>
          <PostSlide />
        </Box>
      }
    />
  );
}
