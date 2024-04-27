import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";
import { getPosts } from "@/lib/data";

// FETCH API
const getData = async () => {
    const res = await fetch("http://localhost:3000/api/blog", {next:{revalidate:3600}});
    if (!res.ok) {
        throw new Error("Something wrong while fetching JSON posts data")
    }
    return res.json()
}

const BlogPage = async () => {
    // Fetch with API
    const posts = await getData()
    // Fetch from data
    // const posts = await getPosts();
    return (
        <div className={styles.container}>
            {posts.map((post)=> (
            <div className={styles.post} key={post.id}>
                <PostCard post={post}/>
            </div>  
            ))}
        </div>
    )
}

export default BlogPage