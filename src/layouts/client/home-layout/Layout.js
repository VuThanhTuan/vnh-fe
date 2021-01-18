import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Box } from '@material-ui/core';
import TopBar from '../../../components/client/topbar/Topbar';
import them from '../../../theme';

const useStyles = makeStyles(() => ({
  layout: {
    backgroundColor: them.palette.color9,
  },
}));

const Layout = (props) => {
  const classes = useStyles();
  const { banner, content } = props;
  return (
    <Box component="div" className={classes.mainLayout}>
      <TopBar />
      {banner}
      <Container>{content}</Container>
    </Box>
  );
};

export default Layout;
