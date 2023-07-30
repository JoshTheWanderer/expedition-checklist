import type { AppProps } from 'next/app';
import '../styles/variables.css';
import '../styles/typography.css';
import '../styles/modes.css';
import 'normalize.css';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Personal Backpacking Checklist</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
