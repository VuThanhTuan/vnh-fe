import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Container } from '@material-ui/core';
import TopBar from './Topbar';

const Layout = (props) => {
  const { children } = props;
  return (
    <div>
      <TopBar />
      <Container>{children}</Container>
    </div>
  );
};

export default Layout;
