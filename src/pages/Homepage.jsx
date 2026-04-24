import AddPosts from '../components/AddPosts/AddPosts'
import styles from './Homepage.module.css'

function Homepage() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}> Posts App</h1>
                <AddPosts/>
            </div>
        </div>
    )
}

export default Homepage