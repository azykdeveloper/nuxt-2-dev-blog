import { request, gql } from "graphql-request";

export async function getBlogs() {
  const config = useRuntimeConfig();
  const graphqlAPI = config.public.graphcmsEndpoint;

  const query = gql`
    query MyQuery {
      blogs {
        title
        description
        createdAt
        slug
        tag {
          name
          slug
        }
        author {
          name
          bio
          image {
            url
          }
        }
        category {
          slug
          name
        }
        image {
          url
        }
        content {
          html
        }
      }
    }
  `;

  return await request(graphqlAPI, query);
}

export async function getBlog(slug: string) {
  const config = useRuntimeConfig();
  const graphqlAPI = config.public.graphcmsEndpoint;

  const query = gql`
    query MyQuery($slug: String!) {
      blog(where: { slug: $slug }) {
        title
        description
        slug
        author {
          bio
          name
          image {
            url
          }
        }
        createdAt
        content {
          html
        }
        image {
          url
        }
        tag {
          name
          slug
        }
      }
    }
  `;

  return await request(graphqlAPI, query, { slug });
  
}
