import Document, {
  Head,
  Html,
  Main,
  NextScript,
  DocumentContext,
  DocumentProps,
  DocumentInitialProps,
} from 'next/document';

import { GA_TRACKING_ID } from '@flowtie/utils';

export default function CustomDocument() {
  return (
    <Html lang="en-US">
      <Head>
        <title>Flowtie | Coming Soon!</title>
        <meta name="sentry-trace" content="{{ span.toSentryTrace() }}" />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <script
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
      </Head>
      <body className="loading">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

// export default class FlowtieDocument extends Document<DocumentProps | unknown> {
//   // static async getInitialProps(
//   //   ctx: DocumentContext
//   // ): Promise<DocumentInitialProps> {
//   //   const originalRenderPage = ctx.renderPage;
//   //   const initialProps = await Document.getInitialProps(ctx);
//   //   try {
//   //     ctx.renderPage = () =>
//   //       originalRenderPage({
//   //         enhanceApp: (App) => (props) => <App {...props} />,
//   //       });
//   //     return {
//   //       ...initialProps,
//   //       styles: <>{initialProps.styles}</>,
//   //     };
//   //   } catch (error) {
//   //     console.log(error);
//   //   }
//   // }
//
//   render() {
//     return (
//       <Html lang="en-US">
//         <Head>
//           <meta name="sentry-trace" content="{{ span.toSentryTrace() }}" />
//           <script
//             async
//             src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
//           />
//           <script
//             dangerouslySetInnerHTML={{
//               __html: `
//             window.dataLayer = window.dataLayer || [];
//             function gtag(){dataLayer.push(arguments);}
//             gtag('js', new Date());
//             gtag('config', '${GA_TRACKING_ID}', {
//               page_path: window.location.pathname,
//             });
//           `,
//             }}
//           />
//         </Head>
//         <body className="loading">
//           <Main />
//           <NextScript />
//         </body>
//       </Html>
//     );
//   }
// }
