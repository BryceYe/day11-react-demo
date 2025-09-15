export function todoReducer(state, action) {
    const id = action.payload.id
    switch (action.type) {
        case "LOAD_TODOS":
            return action.payload;
        case "DELETE_TODO":
            return state.filter((value) => value.id !== id);
        case "ADD_TODO":
            return [...state, action.payload];
        case "UPDATE_TODO":
            return state.map((value) => {
                if (value.id === id) {
                    return {...value, done: !value.done}
                }
                return value
            })
        default:
            return state
    }
}