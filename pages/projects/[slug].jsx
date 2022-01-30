import React from 'react';
import  Link from 'next/link';
import Layout from '../../components/Layout';
import Icon from '../../components/Icon';
// import Warning from '../../components/Warning';
import { getAllProjectPages, getProjectPage } from '../../lib/api'
import markdownToHtml from '../../lib/mdToHTML';

function Project(props) {
//   const { data } = props;
  const { contentfulChrisProjectPage } = props;
  const {
    title, description, body, site, techCollection, githubLink, relatedProjectsCollection, inProgress,
  } = contentfulChrisProjectPage;
  console.log('related', techCollection)
  const relatedProjects = relatedProjectsCollection.items
  const tech = techCollection.items
  return (
    <Layout seoInfo={{ title, description }}>
      <section id="page-wrapper" className="columns is-desktop">
        <div className="column is-two-thirds is-desktop">
          <h1 className="is-size-3 is-size-4-touch is-capitalized has-text-weight-bold">
            {title}
          </h1>
          {body && (
            <div
              className="content"
              dangerouslySetInnerHTML={{ __html: body }}
            />
          )}
        </div>
        <div className="column">
          <strong style={{ display: 'block' }} className="has-text-grey-darker mt-4 mb-2">Related links</strong>
          {site && (
            <div className="box">
              <small style={{ display: 'block' }}>Site</small>
              <a href={site.link}>{site.text}</a>
            </div>
          )}
          {tech && (
            <div className="box">
              <small style={{ display: 'block' }}>Tech used</small>
              <div className="columns is-multiline is-mobile mt-2">
                {tech.map((techItem) => (
                    <div key={techItem.slug} className="column is-one-fifth">
                  <Link
                    href={`/tech/${techItem.slug}`}
                    passHref
                  >
                    <Icon name={techItem.name} />
                  </Link>
                  </div>
                ))}
              </div>
            </div>
          )}
          {githubLink && (
            <div className="box">
              <small style={{ display: 'block' }}>Github for project</small>
              <a href={githubLink} style={{ display: 'block' }} className="mt-2">
                <Icon name="Github" />
              </a>
            </div>
          )}
          {relatedProjects && (
            <div className="box">
              <small style={{ display: 'block' }}>Related projects</small>
              {relatedProjects.map((relatedProject) => (
                  <div  style={{ display: 'block' }}  key={relatedProject.slug}>
                <Link
                  href={`/projects/${relatedProject.slug}`}
                >
                  { relatedProject.title }
                </Link>
                </div>
              ))}
            </div>
          )}
          {/* <div
            id="there-has-to-be-a-better-way"
            className="box"
            style={{ visibility: 'hidden' }}
          >
            <small style={{ display: 'block' }}>Table of contents</small>
            <div className="content">
              <nav id="nav-side" className="table-of-contents" />
            </div>
          </div> */}
        </div>
        {/* <div className="modal">
          <div className="modal-background" />
          <div className="modal-content">
            <p className="image">
              <img src="https://bulma.io/images/placeholders/1280x960.png" alt="" />
            </p>
          </div>
          <button className="modal-close is-large" type="button" aria-label="close" />
        </div> */}
        {/* {inProgress && <Warning />} */}
      </section>
    </Layout>
  );
}
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = (await getAllProjectPages()) ?? []

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
    console.log('params', params)
  const contentfulChrisProjectPage = await (getProjectPage(params.slug)) ?? []
  const parsedBody = await markdownToHtml(contentfulChrisProjectPage.body || '')
 
  // Pass post data to the page via props
  return { props: { contentfulChrisProjectPage: {...contentfulChrisProjectPage, body: parsedBody} } }
}
export default Project