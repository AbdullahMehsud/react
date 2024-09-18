import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload,
                completed: false
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
        updateTodo: (state, action) => {
            const {id, updatedData} = action.payload;
            const todo = state.todos.find((todo) => todo.id === id)
            if(todo) {
               todo.text = updatedData.text
            }
        },
        toggleCompleteTodo:(state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload)
            if(todo){
                todo.completed = !todo.completed
            }
        }
    }
});

export const {addTodo, removeTodo, updateTodo, toggleCompleteTodo} = todoSlice.actions

export default todoSlice.reducer