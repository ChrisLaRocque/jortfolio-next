import * as React from 'react';

import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Cards from '../components/Cards';
import { getAllTech, getAllProjectPages } from '../lib/api'

function IndexPage(props) {
  // const { data } = props;
  // const { allContentfulChrisProjectPage, allContentfulTech } = data;
  const {projectCards, techCards} = props
  // const projectCards = allContentfulChrisProjectPage.edges.map((edge) => edge.node);
  // const techCards = allContentfulTech.edges.map((edge) => edge.node);

  return (
    <Layout seoInfo={{ title: 'Chris LaRocque | Web Developer', description: 'Chris LaRocque is a web developer from Boston, MA. He specializes in tactical agile development aimed at delivering user-centric software at scale and at speed.' }}>
      <Hero
        headline="Hey I&apos;m Chris, I do web stuff."
        subHeadline="I&apos;m a full-stack web developer/engineer building responsive, user-first websites. Check out the things I&apos;ve built or the tech I&apos;ve used to build them below."
      />
      <Cards
        headline="Projects"
        subHeadline="The 3 most recent projects of mine."
        cards={projectCards}
        more={{ to: '/projects', text: 'All projects'}}
        prepend="/projects/"
        ctaText="Building"
      />
      <Cards
        headline="Tech"
        subHeadline="The tech I use and where I&apos;ve used it"
        cards={techCards}
        more={{ to: '/tech', text: 'All tech' }}
        prepend="/tech/"
        icons
        ctaText="What I&apos;ve built with"
      />
    </Layout>
  );
}
export async function getStaticProps({ params }) {
  const tech = await (getAllTech()) ?? []
  const projectPages = await(getAllProjectPages() || [])
  const projectCards = projectPages.slice(0,3)
  const techCards = tech.slice(0,6)
  // Pass post data to the page via props
  return { props: { projectCards, techCards } }
}
export default IndexPage;