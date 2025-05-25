import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    todos: null,
    loading: false
}

export const getTodos = createAsyncThunk('usersSlice/getUsers', async() => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos`)
    const data = await res.json()
    return data
    
})

const todosSlice = createSlice({
    name: 'todosSlice',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getTodos.pending, (state,) => {
            state.loading = true
        })
        builder.addCase(getTodos.fulfilled, (state,action) => {
            state.loading = false
            state.todos = action.payload
            
        })
        builder.addCase(getTodos.rejected, () => {
            console.log('rejected');
            
        })
    }
})

export default todosSlice.reducer


