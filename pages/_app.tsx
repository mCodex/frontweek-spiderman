import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import GoogleFonts from 'next-google-fonts';

import GloalStyle from '../src/styles/global';
import Navbar from '../src/components/Navbar';

import colors from '../src/colors';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />

      <title>Spider Man: Miles Morales | PS5</title>

      <meta name="HandheldFriendly" content="True" />
      <meta name="MobileOptimized" content="320" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>

    <ThemeProvider theme={colors}>
      <>
        <Navbar />
        <Component {...pageProps} />
        <GloalStyle />
      </>
    </ThemeProvider>

    <GoogleFonts href="https://fonts.googleapis.com/css2?family=Mukta:wght@300;400&display=swap" />
  </>
);

export default MyApp;
