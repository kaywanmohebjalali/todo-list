
const reducer = (state, action) => {

    switch (action.type) {
        case 'SET_TODOS':
            return { ...state, todos: action.payload }

        case 'ADD_TODOS':
            return { todos: [action.payload, ...(state.todos)] }

        case 'UPDATE_TODOS':
            return {
                todos: state.todos.map(todo => todo.id === action.payload.id ? { ...todo, completed: action.payload.completed } : todo)
            }

        case 'DELETE_TODOS':

            return {
                todos: state.todos.filter(todo => todo.id !== action.payload)
            }


        default:
            return state;
    }
}

export default reducer

