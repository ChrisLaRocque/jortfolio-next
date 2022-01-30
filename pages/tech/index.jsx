import * as React from 'react';

import Layout from '../../components/Layout';
import Hero from '../../components/Hero';
import Cards from '../../components/Cards';
import { getAllTech } from '../../lib/api'

export default function AllTechPage({techCards}) {

  return (
    <Layout seoInfo={{title: 'Tech | Chris LaRocque', description: "An overview of the tools I've used as a full stack web developer. Including but not limited to: Gatsby, Nuxt, React, GraphQL, Contentful, Netlify, Gatsby Cloud, and AWS."}}>
      <Hero
        headline="Tech"
        colorIs="link"
      />
      <Cards
        cards={techCards}
        prepend="/tech/"
        ctaText="What I've made with"
        icons
      />
    </Layout>
  );
}

export async function getStaticProps() {
  const techCards = (await getAllTech()) ?? []
  return {
    props: {  techCards },
  }
}