import * as React from 'react';

import Head from 'next/head'
import Script from 'next/script'
export default function SEO({
  description, lang, meta, title,
}) {
    const parsedTitle = title || 'Chris LaRocque | Web Developer'
  return (
    <>
    <Head>
        <title>{parsedTitle}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content={parsedTitle}></meta>
        <meta property="og:image" content="https://www.larocque.dev/headshot.jpeg"></meta>
        <meta name="description" content={description || "Chris LaRocque is a web developer from Boston, MA. He specializes in tactical agile development aimed at delivering user-centric software at scale and at speed."}></meta>
        <meta property="og:type" content='website'></meta>
        <meta name="twitter:card" content="summary"></meta>
        <meta name="twitter:title" content={parsedTitle}></meta>
        <meta name="twitter:description" content={description || "Chris LaRocque is a web developer from Boston, MA. He specializes in tactical agile development aimed at delivering user-centric software at scale and at speed."}></meta>
    </Head>
    <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-YH5X1FXFKW"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-YH5X1FXFKW');
        `}
      </Script>
      </>
    // <Helmet
    // //   htmlAttributes={{
    // //     lang,
    // //   }}
    // //   title={title}
    //   meta={[
    //     {
    //       name: 'description',
    //       content: description,
    //     },
    //     {
    //       property: 'og:title',
    //       content: title,
    //     },
    //     {
    //       property: 'og:description',
    //       content: description,
    //     },
    //     {
    //       property: 'og:type',
    //       content: 'website',
    //     },
    //     {
    //       name: 'twitter:card',
    //       content: 'summary',
    //     },
    //     {
    //       name: 'twitter:title',
    //       content: title,
    //     },
    //     {
    //       name: 'twitter:description',
    //       content: description,
    //     },
    //   ].concat(meta)}
    // />
  );
}
