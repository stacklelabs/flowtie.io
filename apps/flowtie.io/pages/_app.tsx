import { AppProps, NextWebVitalsMetric } from 'next/app';
// import Head from 'next/head';
import '@fontsource/inter/variable-full.css';
import './styles.css';
import * as utils from '@flowtie/utils';
import { useRouter } from 'next/router';
import { FC, useEffect } from 'react';
import SEO from '../next-seo.config';
import { DefaultSeo } from 'next-seo';

const Noop: FC = ({ children }) => <>{children}</>;

function CustomApp({ Component, pageProps }: AppProps) {
  const LayoutNoop = (Component as any).LayoutNoop || Noop;
  const router = useRouter();

  useEffect(() => {
    document.body.classList?.remove('loading');
  }, []);

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      utils.pageview(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <LayoutNoop pageProps={pageProps}>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </LayoutNoop>
    </>
  );
}

export function reportWebVitals(metric: NextWebVitalsMetric): void {
  window.gtag('event', metric.name, {
    event_category:
      metric.label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
    value: Math.round(
      metric.name === 'CLS' ? metric.value * 1000 : metric.value
    ),
    event_label: metric.id,
    non_interaction: true,
  });
  switch (metric.name) {
    case 'FCP':
      console.log('FCP: ', metric);
      break;
    case 'LCP':
      console.log('LCP: ', metric);
      break;
    case 'CLS':
      console.log('CLS: ', metric);
      break;
    case 'FID':
      console.log('FID: ', metric);
      break;
    case 'TTFB':
      console.log('TTFB: ', metric);
      break;
    case 'Next.js-hydration':
      console.log('Next.js-hydration: ', metric);
      break;
    case 'Next.js-route-change-to-render':
      console.log('Next.js-route-change-to-render: ', metric);
      break;
    case 'Next.js-render':
      console.log('Next.js-render: ', metric);
      break;
    default:
      break;
  }
}

export default CustomApp;
