import { useDispatch, useSelector } from 'react-redux';
import { useState } from "react"
import { Inputs } from './components/Inputs';
import { ToDoList } from './components/ToDoList';
import { CalendarMain } from './components/CalendarMain';
import * as dayjs from 'dayjs'
import { AddToDoAction, DeleteToDoAction, FilterToDoAction } from './store/Actions';

function App() {
    const dispatch = useDispatch()
    const ToDoArray = useSelector(state => state.ToDoArray.ToDoArray)
    const AddToDoFunction = (text) => {
        if (inputState.length === 0) {
            return
        }
        else {
            const OneToDo = {
                text,
                id: Date.now(),
                date: dayjs(Date()).format('DD/MM/YYYY')
            }
            dispatch(AddToDoAction(OneToDo))
        }
    }
    const DeleteToDoFunction = (i) => {
        dispatch(DeleteToDoAction(i.id))
    }
    const FilterToDoFunction = () => {
        dispatch(FilterToDoAction(fisrtCalendarState, secondCalendarState))
    }

    const [inputState, setInputState] = useState("")
    const [fisrtCalendarState, SetFirstCalendarState] = useState(dayjs(new Date()).format('DD/MM/YYYY'))
    const [secondCalendarState, SetSecondCalendarState] = useState(dayjs(new Date()).format('DD/MM/YYYY'))
    return (
        <div className="app">
            <Inputs setInputState={setInputState} inputState={inputState} AddToDo={AddToDoFunction} />
            <CalendarMain fisrtCalendarState={fisrtCalendarState} secondCalendarState={secondCalendarState} SetFirstCalendarState={(value) => SetFirstCalendarState(dayjs(value).format('DD/MM/YYYY'))} SetSecondCalendarState={(value) => SetSecondCalendarState(dayjs(value).format('DD/MM/YYYY'))} FilterToDo={() => FilterToDoFunction()} />
            <ToDoList ToDoArray={ToDoArray} DeleteToDo={DeleteToDoFunction} />
        </div>
    );
}

export default App;
