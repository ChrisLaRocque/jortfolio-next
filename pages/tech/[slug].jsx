import React from 'react';
import Link from 'next/link';
import Layout from '../../components/Layout';
import Icon from '../../components/Icon';
// import Description from '../../components/Description';
import { getAllTech, getTechPage, getAllProjectPages } from '../../lib/api'
import markdownToHtml from '../../lib/mdToHTML';
function Tech(props) {
  const { data } = props;
//   const { contentfulTech, allContentfulChrisProjectPage } = data;
const {contentfulTech, allContentfulChrisProjectPage} = props
  const {
    title, description, name, homepage, experience
  } = contentfulTech;
  const related = allContentfulChrisProjectPage
  return (
    <Layout seoInfo={{ title, description }}>
      <section>
        <div className="columns">
          <div className="column is-two-thirds">
            <h1
              className="is-size-3 is-size-4-touch is-capitalized has-text-weight-bold"
            >
              { name }
            </h1>
            <div className="content">
              {/* <Description homepageFields={homepage} /> */}
              { description }
            </div>
            {experience && (
            <div className="content">
              <h2>{ `My experience with ${name}` }</h2>
              <div dangerouslySetInnerHTML={{ __html: experience.childMarkdownRemark.html }} />
            </div>
            )}
          </div>
          <div className="column is-one-third">
            <strong style={{ display: 'block' }} className="has-text-grey-darker mt-4 mb-2">
              {
          `Related links for ${name}`
        }

            </strong>
            <div className="box">
              <small style={{ display: 'block' }}>
                {
            `${name} homepage`
          }

              </small>
              <a href={homepage.link}>
                <Icon name={name} />
&nbsp;
                {
              homepage.text
            }

              </a>
            </div>
            {related && (
            <div className="box">
              <small style={{ display: 'block' }}>
                {
            `Projects where I've used ${name}`
          }
              </small>
              {related.map((project) => {
                const { slug, title } = project;
                return (
                <div key={slug}
                    style={{ display: 'block' }}>
                  <Link
                    href={`/projects/${slug}`}
                  >
                    {title }
                  </Link>
                  </div>
                );
              })}

            </div>
            )}
          </div>
        </div>
        <div className="columns">
          <div className="column is-full">
            <Link href="/tech">
                <span>
              <Icon name="Arrow left" />
              {' '}
              All tech
              </span>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = (await getAllTech()) ?? []

  // Get the paths we want to pre-render based on posts
  const paths = res.map((page) => ({
    params: { slug: page.slug },
  }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  const contentfulTech = await (getTechPage(params.slug)) ?? []
  const projectPages = await(getAllProjectPages() || [])
  const parsedBody = await markdownToHtml(contentfulTech.experience || '')
    const allContentfulChrisProjectPage = projectPages.filter(page => page.techCollection.items.map(tech=>tech.slug).includes(params.slug))
  // Pass post data to the page via props
  return { props: { contentfulTech: {...contentfulTech, experience: parsedBody}, allContentfulChrisProjectPage } }
}
export default Tech;