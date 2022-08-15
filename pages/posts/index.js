import { getPosts } from "../../lib/data"
import PostCard from '../../components/PostCard';

export async function getStaticProps() {
    const posts = await getPosts()
    return {
        props: {
            posts,
        }
    }
}

export default function postsIndex({ posts }) {
    return (
        <div className="w-11/12 max-w-6xl mx-auto">
            <div className="my-12">
                {posts.map(({ title, date, description, featureImage, slug, youTubeLink }) => (
                    <PostCard 
                        key={slug} 
                        title={title} 
                        date={date} 
                        description={description} 
                        featureImage={featureImage} 
                        slug={slug}
                        youTubeLink={youTubeLink}
                    />
                ))}
            </div>
        </div>
    )
}