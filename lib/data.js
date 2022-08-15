import { gql, GraphQLClient } from "graphql-request"

const endpoint = `https://api-us-west-2.graphcms.com/v2/${process.env.NEXT_PUBLIC_KEY}/master`

const graphQLClient = new GraphQLClient(endpoint)

export const getPosts = async () => {
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