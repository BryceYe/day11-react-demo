export function todoReducer(state, action) {
    const id = action.payload.id
    switch (action.type) {
        case "TOGGLE_TODO":
            const newState = [...state]
            return newState.map((value) => {
                if (value.id === id) {
                    return {id, text: value.text, done: !value.done}
                }
                return value
            })
        case "DELETE_TODO":
            return state.filter((value) => value.id !== id);
        case "ADD_TODO":
            const newId = state.length > 0 ? Math.max(...state.map(item => item.id)) + 1 : 1;
            return [...state, {id: newId, text: action.payload.text, done: false}];
        default:
            return state
    }
}