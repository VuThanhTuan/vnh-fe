import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Container, Box } from '@material-ui/core';
import TopBar from '../../../components/client/topbar/Topbar';

const Layout = (props) => {
  const { banner, content } = props;
  return (
    <Box component="div">
      <TopBar />
      {banner}
      <Container>{content}</Container>
    </Box>
  );
};

export default Layout;
