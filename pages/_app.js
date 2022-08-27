import { useEffect } from 'react';
import AOS from 'aos';
import '../styles/globals.scss';
import 'aos/dist/aos.css';
import Script from 'next/script';
import Header from 'next/head';

function MyApp({ Component, pageProps, navs }) {
  console.log(navs);
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-cubic',
      once: true,
      offset: 200,
      useClassNames: false,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <Header>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
          integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A=="
          crossOrigin="anonymous"
          referrerpolicy="no-referrer"
        />
        <meta
          name="google-site-verification"
          content="iHbePLehOr3vZq_utNflG1Ij0Vfdg1aqrVB-59wtcAA"
        />
        <meta
          name="description"
          content="Sunshine Coast based UX/UI Design, App Development and Web Devlopment."
        />
        <Script
          id="GoogleAnalyticsLink"
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=G-1PFZ87SYEP`}
        />

        <Script id="GoogleAnalyticsCode" strategy="lazyOnload">
          {`
        window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-1PFZ87SYEP');
        `}
        </Script>
      </Header>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
