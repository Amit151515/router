import { configureStore } from "@reduxjs/toolkit";
import usersSlice from './users/usersSlice'
import postsSlice from './posts/postsSlice'
import todosSlice from './todos/todosSlice'


export const store = configureStore({
    reducer: {
        users: usersSlice,
        posts: postsSlice,
        todos: todosSlice
    }
})