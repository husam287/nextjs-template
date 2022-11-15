import Head from 'next/head';
import React from 'react';
import IMPORTANT_VARS from 'constants/ImportantVars';
import Toast from './Toast';

const MainLayout = ({ children }) => (
  <div>
    <Head>
      <title>{IMPORTANT_VARS.websiteName}</title>
      <meta name="description" content={IMPORTANT_VARS.websiteDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div style={{ minHeight: '75vh' }}>{children}</div>

    {/* MODALS & ALERTS */}
    <Toast />
  </div>
);

export default MainLayout;
