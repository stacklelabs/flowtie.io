import './page.module.css';
import { useRouter } from 'next/router';
import * as React from 'react';
import * as utils from '@flowtie/utils';

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

  return <div>{props.children}</div>;
};

export default Page;
