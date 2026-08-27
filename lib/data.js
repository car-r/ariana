import { gql, GraphQLClient } from "graphql-request"

const KEY = process.env.NEXT_PUBLIC_KEY
const endpoint = KEY ? `https://api-us-west-2.graphcms.com/v2/${KEY}/master` : null
const graphQLClient = endpoint ? new GraphQLClient(endpoint) : null

export const getPosts = async () => {
    if (!graphQLClient) return []
    const query = gql`
        {
            posts(orderBy: date_DESC) {
                title
                slug
                date
                description
                featureImage {
                    url
                }
                youTubeLink
            }
        }
    ` 
    const result = await graphQLClient.request(query)
    return result.posts
}

export const getPostData = async (slug) => {
    if (!graphQLClient) return null
    const query = gql`
        query getPost($slug: String!) {
            post(where: {slug: $slug}) {
                title
            }
        }
    `

    const variables = {
        slug: slug,
    }
}

export const getContentData = async () => {
    if (!graphQLClient) return { posts: [] }
    const query = gql`
        {
            posts(where: {featured: true}, orderBy: date_DESC) {
                youTubeLink
                title
                featureImage {
                    url
                }
            }
        }   
    `
    return await graphQLClient.request(query)
}

export const getRecentPosts = async () => {
    if (!graphQLClient) return { posts: [] }
    const query = gql`
        {
            posts(orderBy: date_DESC, last: 3) {
                featureImage {
                    url
                }
                slug
                title
            }
        }
    `
    return await graphQLClient.request(query)
}
