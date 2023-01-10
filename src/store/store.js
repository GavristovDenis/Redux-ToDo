import { createStore, combineReducers } from "redux"
import { ToDoReducer } from "./AddToDo"

const RootReducer = combineReducers({
    ToDoArray: ToDoReducer
}
)
export const store = createStore(RootReducer)
