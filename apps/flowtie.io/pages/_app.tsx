import { AppProps, NextWebVitalsMetric } from 'next/app';
// import Head from 'next/head';
import '@fontsource/inter/variable-full.css';
import './styles.css';
import * as utils from '@flowtie/utils';
import { useRouter } from 'next/router';
import { FC, useEffect } from 'react';
import SEO from '../next-seo.config';
import { DefaultSeo } from 'next-seo';
import Script from 'next/script';
import * as snippet from '@segment/snippet';
import Page from '../components/page/page';

import { GA_TRACKING_ID } from '@flowtie/utils';

const Noop: FC = ({ children }) => <>{children}</>;

function renderSegmentSnippet() {
  const opts = {
    apiKey: process.env.NEXT_PUBLIC_ANALYTICS_WRITE_KEY,
    page: true,
  };

  if (process.env.NODE_ENV === 'development') {
    return snippet.max(opts);
  }

  return snippet.min(opts);
}

function CustomApp({ Component, pageProps }: AppProps) {
  const LayoutNoop = (Component as any).LayoutNoop || Noop;
  //   const router = useRouter();

  //   useEffect(() => {
  //     document.body.classList?.remove('loading');
  //   }, []);

  //   useEffect(() => {
  //     const handleRouteChange = (url: URL) => {
  //       if (window.gtag) {
  //         utils.pageview(url);
  //       }
  //     };

  //     router.events.on('routeChangeComplete', handleRouteChange);

  //     return () => {
  //       router.events.off('routeChangeComplete', handleRouteChange);
  //     };
  //   }, [router.events]);

  return (
    <Page>
      <Script
        id="segment"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: renderSegmentSnippet() }}
      />
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <LayoutNoop pageProps={pageProps}>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
      </LayoutNoop>
    </Page>
  );
}

export function reportWebVitals(metric: NextWebVitalsMetric): void {
  if (window && window.gtag) {
    window.gtag('event', metric.name, {
      event_category:
        metric.label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
      value: Math.round(
        metric.name === 'CLS' ? metric.value * 1000 : metric.value
      ),
      event_label: metric.id,
      non_interaction: true,
    });
  }
  switch (metric.name) {
    case 'FCP':
      //   console.log('FCP: ', metric);
      break;
    case 'LCP':
      //   console.log('LCP: ', metric);
      break;
    case 'CLS':
      //   console.log('CLS: ', metric);
      break;
    case 'FID':
      //   console.log('FID: ', metric);
      break;
    case 'TTFB':
      //   console.log('TTFB: ', metric);
      break;
    case 'Next.js-hydration':
      //   console.log('Next.js-hydration: ', metric);
      break;
    case 'Next.js-route-change-to-render':
      //   console.log('Next.js-route-change-to-render: ', metric);
      break;
    case 'Next.js-render':
      //   console.log('Next.js-render: ', metric);
      break;
    default:
      break;
  }
}

export default CustomApp;
