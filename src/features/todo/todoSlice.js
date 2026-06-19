import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{
        id: 1,
        text: "Hello World"
    }]
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload, // HS THIS PAYLOAD IS ITSELF A OBJECT, CAN BE DONE LIKE action.payload.text
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => {
                todo.id !== action.payload; // HS action.payload HERE IT WILL AUTOMATICALLY COMPARE, NO NEED OF state.todos.id
            })
        },
        updateTodo: () => {},
    }
})

export const {addTodo, removeTodo} = todoSlice.actions; // HS WE HAVE EXPORTED INDIVIDUAL FUNCTIONALITY B'COZ IT WILL BE NEEDED IN OUR COMPONENTS.