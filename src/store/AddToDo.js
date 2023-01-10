const DefaultState = {
    ToDoArray: []
}
export const ToDoReducer = (state = DefaultState, action) => {
    switch (action.type) {
        case "AddToDo": {
            return { ...state, ToDoArray: [...state.ToDoArray, action.payload] }
        }
        case "DeleteToDo":
            return { ...state, ToDoArray: state.ToDoArray.filter(array => array.id !== action.payload) }
        default:
            return state
    }
}