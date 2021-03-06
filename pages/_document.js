import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { GA_TRACKING_ID } from '../helpers/analytics'

export default class MyDocument extends Document {

    render() {
        return (
          <Html lang="en">
            <Head>
            {/* Global Site Tag (gtag.js) - Google Analytics */}
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
              <link
                rel="preload"
                href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,700&display=swap"
                as="font"
                crossOrigin=""
              />
            <link
                rel="preload"
                href="https://fonts.googleapis.com/css?family=Varela+Round&display=swap"
                as="font"
                crossOrigin=""
              />
              <title>Online chat room, no need to login just create and go | chat.owenmerry.com</title>
                <meta property="og:title" content="Online chat room, no need to login just create and go" />
                <meta property="og:description" content="No need to create an account just create a room chat with friends, collegues or send links and messages between devices" />
                <meta property="og:image" content="http://chat.owenmerry.com/chat-share.png" />
                <meta property="og:url" content="http://chat.owenmerry.com" />
            </Head>
            <body>
              <Main />
              <NextScript />
            </body>
          </Html>
        );
      }

  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }



}