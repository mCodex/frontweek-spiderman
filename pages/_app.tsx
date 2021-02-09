import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';

import GloalStyle from '../src/styles/global';
import Navbar from '../src/components/Navbar';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Spider-man: Miles Morales | PS5</title>
      <script src="/js/svg-inject.min.js" />
    </Head>
    <Navbar />
    <Component {...pageProps} />
    <GloalStyle />
  </>
);

export default MyApp;
