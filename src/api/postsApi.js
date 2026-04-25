const postsApi = "https://jsonplaceholder.typicode.com/posts?_limit=10";

export const fetchPosts = async() => {
    // const result = await fetch(postsApi)
    // const data = await result.json()
    // return data

    // ще можна через трай і кетч
    // або ще:
    // if (result.ok){
    // }

    return fetch(postsApi).then(response => response.json())
}