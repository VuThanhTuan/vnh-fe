import React from 'react';
import { useSelector } from 'react-redux';
import Layout from '../src/layouts/client/home-layout';

export default function Home() {
  // eslint-disable-next-line no-unused-vars
  const counter = useSelector((state) => state.count);

  return (
    <Layout>
      <div>Home page</div>
    </Layout>
  );
}
