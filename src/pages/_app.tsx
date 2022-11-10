import Head from "next/head";
import { NextSeo } from "next-seo";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "ui/styles/global.styles";
import theme from "ui/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#14FFEC" />
        <link rel="shortcut icon" href="icon-512.png" />
        <link rel="apple-touch-icon" href="icon-512.png" />
      </Head>
      <NextSeo
        title="Henrique Teixeira Dev"
        description="Desenvoldevor Front-End ReactJS"
        canonical="https://henriqueteixeira.dev.br/"
        openGraph={{
          url: "https://henriqueteixeira.dev.br/",
          title: "Henrique Teixeira Dev",
          description: "Desenvoldevor Front-End ReactJS",
          images: [
            {
              url: "cover.png",
            },
          ],
          site_name: "Título",
          locale: "pt_BR",
        }}
        twitter={{
          handle: "@henriqueteixeira.dev",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
