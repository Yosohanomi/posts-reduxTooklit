import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../api/postsApi"
import { addPosts } from "../../redux/slices/postsSlice";
import { useMemo } from "react";
import AddNewPost from "../AddNewPost/AddNewPost";
import styles from './AddPosts.module.css'

function AddPosts() {
    const dispatcher = useDispatch();
    const posts = useSelector((state) => state.postsSlice.posts)
    
    const handleBtnClick = async()=> {
        const postsList = await fetchPosts();
        dispatcher(addPosts(postsList))
    }

    const renderedPosts = useMemo(()=> {
        return posts.map(post => (
            <li key={post.id} className={styles.postItem}>
                <h4 className={styles.postTitle}>{post.title}</h4>
                <p className={styles.postBody}>{post.body}</p>
            </li>
        ))
    }, [posts])
    
    return (
        <div className={styles.container}>
            <div className={styles.getPostsSection}>
                <p> Get posts from API </p>
                <button onClick={handleBtnClick} className={styles.fetchButton} type="button">
                     Fetch Posts
                </button>
            </div>
            <AddNewPost/>
            <ul className={styles.postsList}>
                {renderedPosts}
            </ul>
        </div>
    )
}

export default AddPosts