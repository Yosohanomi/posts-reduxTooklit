const postsApi = "https://jsonplaceholder.typicode.com/posts?_limit=10";

export const fetchPosts = async() => {
    const result = await fetch(postsApi)
    const data = await result.json()
    return data
}