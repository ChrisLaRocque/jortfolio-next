const ALL_PROJECTS_GRAPHQL_FIELDS = `
slug
title
description
techCollection {
  items {
    slug
    name
  }
}
`
const ALL_TECH_GRAPHQL_FIELDS = `
slug
title
description
`
const PROJECT_GRAPHQL_FIELDS = `
    title
    description
    body
    site {
        link
        text
    }
    githubLink
    inProgress
    relatedProjectsCollection {
        items {
            slug
            title
        }
    }
    techCollection {
        items {
            slug
            name
        }
    }
`
const TECH_GRAPHQL_FIELDS = `
    title
    description
    name
    homepage {
      link
      text
    }
    experience
`

async function fetchGraphQL(query, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json())
}

function extractProject(fetchResponse) {
  return fetchResponse?.data?.chrisProjectPageCollection?.items?.[0]
}
function extractTech(fetchResponse) {
  return fetchResponse?.data?.techCollection?.items?.[0]
}
function extractProjectPageEntries(fetchResponse) {
  return fetchResponse?.data?.chrisProjectPageCollection?.items
}
function extractTechEntries(fetchResponse) {
  return fetchResponse?.data?.techCollection?.items
}

export async function getAllProjectPages() {
  const entries = await fetchGraphQL(
    `query {
      chrisProjectPageCollection(where: { slug_exists: true }) {
        items {
          ${ALL_PROJECTS_GRAPHQL_FIELDS}
        }
      }
    }`
  )
  return extractProjectPageEntries(entries)
}
export async function getAllTech() {
  const entries = await fetchGraphQL(
    `query {
      techCollection(where: { slug_exists: true }) {
        items {
          ${ALL_TECH_GRAPHQL_FIELDS}
        }
      }
    }`
  )
  return extractTechEntries(entries)
}

export async function getProjectPage(slug) {
  const entry = await fetchGraphQL(
    `query {
      chrisProjectPageCollection(where: { slug: "${slug}" }, limit: 1) {
        items {
          ${PROJECT_GRAPHQL_FIELDS}
        }
      }
    }`
  )
  
  return  extractProject(entry)

}
export async function getTechPage(slug) {
  const entry = await fetchGraphQL(
    `query {
      techCollection(where: { slug: "${slug}" }, limit: 1) {
        items {
          ${TECH_GRAPHQL_FIELDS}
        }
      }
    }`
  )
  
  return  extractTech(entry)

}