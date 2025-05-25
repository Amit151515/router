import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    users: null,
    loading: false
}

export const getUsers = createAsyncThunk('usersSlice/getUsers', async() => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const data = await res.json()
    return data
    
})

const usersSlice = createSlice({
    name: 'usersSlice',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getUsers.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getUsers.fulfilled, (state,action) => {
            state.loading = false
            state.users = action.payload
            
        })
        builder.addCase(getUsers.rejected, () => {
            console.log('rejected');
            
        })
    }
})

export default usersSlice.reducer