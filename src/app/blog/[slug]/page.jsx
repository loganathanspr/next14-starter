import Image from "next/image";
import styles from "./singlePost.module.css";
import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data";

//Fetch API
// const getData = async (slug) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`, { next: { revalidate: 3600 } });
//     if (!res.ok) {
//         throw new Error("Something went wrong");
//     }
//     return res.json()
// }

const SinglePostPage = async ({ params }) => {
    const { slug } = params;
    console.log("Params: ", params);
    // Fetch with API
    // const post = await getData(slug);
    // Fetch from dummy data
    const post = await getPost(slug);
    console.log("Post data: ", post)
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="https://images.pexels.com/photos/18111097/pexels-photo-18111097/free-photo-of-sunshades-in-beach.jpeg"
                    alt=""
                    fill
                    className={styles.img}
                />
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>{post?.title}</h1>
                <div className={styles.detail}>
                    <Image className={styles.avatar}
                        src="https://images.pexels.com/photos/18111097/pexels-photo-18111097/free-photo-of-sunshades-in-beach.jpeg"
                        alt=""
                        width={50}
                        height={50}
                    />
                    { post && (
                    <Suspense fallback={<div>Loading...</div>}>
                        <PostUser userId={post.userId} />
                    </Suspense> 
                    )}
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Published</span>
                        <span className={styles.detailValue}>1/Apr/2024</span>
                    </div>
                </div>
                <div className={styles.content}>
                    {post.body}
                </div>
            </div>
        </div>
    )
}

export default SinglePostPage