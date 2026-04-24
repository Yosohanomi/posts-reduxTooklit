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
            }
        },
    }
)

export const {addPosts, addPost} = postSlice.actions
export default postSlice.reducer