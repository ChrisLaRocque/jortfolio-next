import * as React from 'react';

import Layout from '../../components/Layout';
import Hero from '../../components/Hero';
import Cards from '../../components/Cards';
import { getAllProjectPages } from '../../lib/api'

export default function AllProjectsPage({projectCards}) {

  return (
    <Layout seoInfo={{ title: 'Projects | Chris LaRocque', description: "An overview of web development projects I've done in the past, including codebase migrations, endless landing pages for marketing campaigns, technical SEO audits and improvements, and many many more." }}>
      <Hero
        headline="Projects"
        colorIs="info"
      />
      <Cards
        cards={projectCards}
        prepend="/projects/"
        ctaText="More about"
      />
    </Layout>
  );
}
export async function getStaticProps() {
  const projectCards = (await getAllProjectPages()) ?? []
  return {
    props: {  projectCards },
  }
}