import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice(
    {
        name: "posts",
        initialState: {
            posts: [],
        },
        reducers: {
            addPosts: (state, action)=> {
                state.posts = action.payload
            },
            addPost: (state, action) => {
                state.posts.push(action.payload)
            },
            deletePost: (state, action) => {
                state.posts = state.posts.filter(post => post.id !== action.payload)
            },
            editPost: (state, action) => {
                const {title, body, id} = action.payload
                const post = state.posts.find(post => post.id === id)
                if (post) {
                    post.title = title
                    post.body = body
                }
            }
        },
    }
)


// {
//     id: someId,
//     title: someTitle,
//     body: someText,
//     userId: 1
// }

export const {addPosts, addPost, deletePost, editPost} = postSlice.actions
export default postSlice.reducer