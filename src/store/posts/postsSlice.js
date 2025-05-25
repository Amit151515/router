import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    posts: null,
    loading: false
}

export const getPosts = createAsyncThunk('usersSlice/getUsers', async() => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const data = await res.json()
    return data
    
})


const postsSlice = createSlice({
    name: 'postsSlice',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getPosts.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getPosts.fulfilled, (state,action) => {
            state.loading = false
            state.posts = action.payload
            
        })
        builder.addCase(getPosts.rejected, () => {
            console.log('rejected');
            
        })
    }
})

export default postsSlice.reducer