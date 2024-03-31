import { getUser } from "@/lib/data";
import styles from "./postUser.module.css";

// Fetch with API
// const getData = async (userId) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {cache:"no-store"});
//     if (!res.ok) {
//         throw new Error("Some wrong while fetching data of a user")
//     }
//     return res.json()
// }

const PostUser = async ({userId}) => {
    // Fetch with API
    // const user = await getData(userId);
    // Fetch from dummy data
    const user = await getUser(userId);
    return (
        <div className={styles.container}>
            <span className={styles.title}>Author</span>
            <span className={styles.username}>{user.username}</span>
        </div>
    )
}

export default PostUser