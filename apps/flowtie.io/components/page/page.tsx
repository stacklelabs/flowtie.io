import './page.module.css';
import { useRouter } from 'next/router';
import * as React from 'react';
import * as utils from '@flowtie/utils';
import dynamic from 'next/dynamic';
import { Spinner } from '@flowtie/ui-components';

const Header = React.lazy(() => import('../header/header'));
const Footer = React.lazy(() => import('../footer/footer'));

/* eslint-disable-next-line */
export interface PageProps {}

export const Page: React.FC<PageProps> = (props) => {
  const router = useRouter();

  React.useEffect(() => {
    document.body.classList?.remove('loading');
  }, []);

  React.useEffect(() => {
    const handleRouteChange = (url: URL) => {
      if (window.gtag) {
        utils.pageview(url);
      }

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      window.analytics.page(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <div className="theme-light bg-background min-h-screen overflow-hidden ">
      <React.Suspense fallback={<Spinner />}>
        <Header brandName="Flowtie" />
      </React.Suspense>
      <React.Suspense fallback={<Spinner />}>
        <main className="pt-16">{props.children}</main>
      </React.Suspense>
      <React.Suspense fallback={<Spinner />}>
        <Footer />
      </React.Suspense>
    </div>
  );
};

export default Page;
