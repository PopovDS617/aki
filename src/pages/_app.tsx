import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { AnimatePresence } from 'framer-motion';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence mode="wait" initial={true}>
      <Layout>
        <Head>
          <title>Aki</title>
          <meta name="desription" content="Aki's website" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </AnimatePresence>
  );
}

export default MyApp;
