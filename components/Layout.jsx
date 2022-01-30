import * as React from 'react';
// import '../styles/main.scss';
import SEO from './SEO';
import Navigation from './Navigation';
import Footer from './Footer';

export default function Layout(props) {
  const { children, seoInfo } = props;

  return (
    <>
      <SEO {...seoInfo} />
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  );
}


