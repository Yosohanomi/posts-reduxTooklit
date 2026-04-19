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
            }
        },
    }
)

export const {addPosts} = postSlice.actions
export default postSlice.reducer