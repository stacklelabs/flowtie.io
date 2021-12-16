import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Flowtie | Coming Soon</title>
      </Head>
      <main className="">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
