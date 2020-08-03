import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))

    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags};
  }

  render() {
    return (
      <html>
        <Head>
          <meta charSet="utf-8" />

          <meta name="theme-color" content="#000000" />
          <link rel="icon" href="/static/favicon.png" />

          <meta name="title" content="Portifólio Ebner" />
          <meta name="description" content="Desenvolvedor FullStack" />

          {/* <!-- Open Graph / Facebook --> */}
          <meta property="og:type" content="website"/>
          <meta property="og:url" content="https://google.com/"/>
          <meta property="og:title" content="Portifólio Ebner"/>
          <meta property="og:description" content="Desenvolvedor FullStack"/>
          <meta property="og:image" content=""/>

          {/* <!-- Twitter --> */}
          <meta property="twitter:card" content="summary_large_image"/>
          <meta property="twitter:url" content="https://google.com/"/>
          <meta property="twitter:title" content="Portifólio Ebner"/>
          <meta property="twitter:description" content="Desenvolvedor FullStack"/>
          <meta property="twitter:image" content=""/>


          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}