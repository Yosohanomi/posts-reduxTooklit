import { useState } from "react"
import { useDispatch } from "react-redux"
import { addPost } from "../../redux/slices/postsSlice"
import styles from './AddNewPost.module.css'

function AddNewPost() {
    const [title, setTitle] = useState("")
    const [text, setText] = useState("")
    const dispatcher = useDispatch()
    
    const handleChangeTitle = (e) => {
        setTitle(e.target.value)
    }
    const handleChangeText = (e) => {
        setText(e.target.value)
    }
    
    const handleBtnClick = () => {
        if (title.trim() && text.trim()) {
            dispatcher(addPost({
                title: title, 
                body: text, 
                userId: 1,
                id: Date.now()
            }))
            setTitle("")
            setText("")
        }
    }
    
    return (
        <div className={styles.container}>
            <h3 className={styles.title}> Create New Post</h3>
            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                <input 
                    value={title} 
                    onChange={handleChangeTitle} 
                    type="text"  
                    className={styles.input}
                    placeholder=" Enter title..." 
                    required
                />
                <input 
                    value={text} 
                    onChange={handleChangeText} 
                    type="text"  
                    className={styles.input}
                    placeholder=" Enter content..." 
                    required
                />
                <button 
                    onClick={handleBtnClick} 
                    className={styles.addButton} 
                    type="button"
                >
                     Add Post
                </button>
            </form>
        </div>
    )
}

export default AddNewPost