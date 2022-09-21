import React from 'react'
import { GraphQLClient } from 'graphql-request';
import { getPostData, getPostSlugs, getRecentPosts } from '../../lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { RichText } from '@graphcms/rich-text-react-renderer';


const graphcms = new GraphQLClient(`https://api-us-west-2.graphcms.com/v2/${process.env.NEXT_PUBLIC_KEY}/master`)

export async function getStaticProps({ params }) {
    // console.log(params)
    const { post } = await graphcms.request(
        `
            query PostPageQuery($slug: String!) {
                post(where: {slug: $slug}) {
                    youTubeLink
                    title
                    slug
                    date
                    content {
                        html
                        markdown
                        raw
                    }
                    featureImage {
                        url
                    }
                }
            }
        `,
        {
            slug: params.slug,
        }
    )
    return {
        props: {
            post,
        },
        revalidate: 10,
    }
}

export async function getStaticPaths() {
    const { posts } = await graphcms.request(
        `
        query MyQuery {
            posts {
              slug
            }
          }
        `
    )

    return {
        paths: posts.map(({ slug }) => ({
            params: { slug },
        })),
        fallback: false,
    }
}

export default function PostDetails({ post }) {
    console.log(post)
    return (
        <div className='mx-auto w-10/12 lg:max-w-4xl my-12 flex flex-col'>
            <h1 className="my-2 text-xl font-semibold md:text-2xl lg:text-4xl">{post.title}</h1>
            <p className='mb-4 font-light text-sm'>{post.date}</p>
            <a href={post.youTubeLink} className='mb-6' target={`_blank`}>
                <Image 
                    src={post.featureImage.url}
                    alt={post.title}
                    className="rounded-lg object-cover"
                    width='1080'
                    height='720'
                />
            </a>
            {/* <article className=''>
                {post.content.markdown}
            </article> */}
            <RichText 
                content={post.content.raw}
                renderers={{
                    p: ({ children }) => <p className='mb-4'>{children}</p>,
                    h3: ({ children }) => <h3 className="text-xl font-semibold mb-4">{children}</h3>,
                    h4: ({ children }) => <h4 className="text-lg font-semibold mb-4">{children}</h4>,
                    bold: ({children}) => <b className='font-semibold'>{children}</b>,
                    italic: ({children}) => <em className=''>{children}</em>,
                    underline: ({ children }) => <u className=''>{children}</u>, 
                    ul: ({ children }) => <ul className='py-6'>{children}</ul>,
                    li: ({ children }) => <li className='flex items-center'><span className='text-3xl pb-1 pr-1'>•</span>{children}</li>,
                    a: ({ children, href }) => <a href={href} className='text-blue-500 hover:underline'>{children}</a>,
                    blockquote: ({ children }) => <blockquote className="italic border-l-4 border-gray-300 pl-6 mb-8 py-4 text-lg">{children}</blockquote>,
                    code_block: ({ children }) => <code className="text-md mb-8 bg-gray-300  bg-opacity-50 rounded-lg p-4 border-2 border-gray-300">{children}</code>
                }}
            />
        </div>
    )
}