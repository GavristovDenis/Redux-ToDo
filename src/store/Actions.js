import { AddToDo, DeleteToDo, FilterToDo } from "./Constants"


export const AddToDoAction = (payload) => ({ type: AddToDo, payload })
export const DeleteToDoAction = (payload) => ({ type: DeleteToDo, payload })
export const FilterToDoAction = (payload, payload2) => ({ type: FilterToDo, payload, payload2 })
