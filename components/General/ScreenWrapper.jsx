import Head from 'next/head';
import React from 'react';
import IMPORTANT_VARS from 'constants/ImportantVars';

const ScreenWrapper = ({ children, pageTitle = '', pageDescription = '' }) => (
  <div>
    <Head>
      {pageTitle ? (
        <title>{`${pageTitle} | ${IMPORTANT_VARS.websiteName}`}</title>
      ) : null}
      {pageDescription ? (
        <meta name="description" content={pageDescription} />
      ) : null}
    </Head>

    <main>{children}</main>
  </div>
);

export default ScreenWrapper;
