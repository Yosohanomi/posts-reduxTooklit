import { useDispatch } from "react-redux";
import { fetchPosts } from "../api/postsApi"
import { addPosts } from "../redux/slices/postsSlice";

function AddPosts() {
    const dispatcher = useDispatch();
    const handleBtnClick = async()=> {
        const postsList = await fetchPosts();
        dispatcher(addPosts(postsList))
        console.log(postsList);
    }
    return (
        <div>
        <div>
            <p>Get posts section...</p>
            <button onClick={handleBtnClick} type="button">get posts</button>
        </div>
        </div>
    )
}

export default AddPosts