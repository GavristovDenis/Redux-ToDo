import { AddToDo, DeleteToDo, FilterToDo, DefaultState } from "./Constants"

export const ToDoReducer = (state = DefaultState, action) => {
    switch (action.type) {
        case AddToDo: {
            return { ...state, ToDoArray: [...state.ToDoArray, action.payload] }
        }
        case DeleteToDo:
            return { ...state, ToDoArray: state.ToDoArray.filter(array => array.id !== action.payload) }
        case FilterToDo:
            return { ...state, ToDoArray: state.ToDoArray.filter(toDos => toDos.date >= action.firstDate && toDos.date <= action.secondDate) }
        default:
            return state
    }
}