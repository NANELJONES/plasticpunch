import { graphql } from "graphql"
import {request, gql } from  "graphql-request"

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT_CMS

// getProjects
export const AllBlogs = async ()=>{
    
    const query =  gql `

 query MyQuery {
  postsConnection {
    edges {
      node {
        slug
        stage
        title
        excerpt
        content {
          html
        }
        contentType
        featuredPost
        coverImage {
          url
        }
        author {
          name
          picture {
            url
          }
        }
        createdAt
      }
    }
  }
}  
    `

try{
    const response = await request(graphqlAPI, query)

    
    return   response?.projectsConnection?.edges
   
    
}catch (error){
    console.log("There was an error", error)
    return ["null"]
}



}






export const GetSingleBlogPost = async (slug) => {
  const query = gql`
    query GetBlogPostBySlug($slug: String!, $contentType: String!) {
      postsConnection(where: { slug: $slug, contentType: $contentType }) {
        edges {
          node {
            slug
            stage
            title
            excerpt
            content {
              html
            }
            contentType
            featuredPost
            coverImage {
              url
            }
            author {
              name
              picture {
                url
              }
            }
            createdAt
          }
        }
      }
    }
  `;

  try {
    const variables = { slug, contentType: "blog" };
    const response = await request(graphqlAPI, query, variables);

    // Return the first matching blog post node, or null if no match
    return response?.postsConnection?.edges[0]?.node || null;
  } catch (error) {
    console.error("There was an error fetching the blog post:", error);
    return null;
  }
};