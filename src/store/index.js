import { configureStore } from '@reduxjs/toolkit'
import todosReducer from './reducers/TodoSlice'
// Store
const store = configureStore({
    reducer: {
        todosReducer
    }
})



export default store