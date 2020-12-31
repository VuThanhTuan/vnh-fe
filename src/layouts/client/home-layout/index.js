import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Container } from '@material-ui/core';
import TopBar from '../../../components/client/topbar/Topbar';

const Layout = (props) => {
  const { banner, content } = props;
  return (
    <div>
      <TopBar />
      {banner}
      <Container>{content}</Container>
    </div>
  );
};

export default Layout;
