import { createStore, combineReducers } from "redux"
import { ToDoReducer } from "./Reducers"



const RootReducer = combineReducers({
    ToDoArray: ToDoReducer
}
)
export const store = createStore(RootReducer)