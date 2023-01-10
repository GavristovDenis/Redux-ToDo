import { ToDoPlaceholder } from './components/ToDoPlaceholder';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
function App() {
    const dispatch = useDispatch()


    const ToDoArray = useSelector(state => state.ToDoArray.ToDoArray)
    const AddToDo = (text) => {
        const OneToDo = {
            text,
            id: Date.now(),
            date: Date()
        }
        dispatch({ type: "AddToDo", payload: OneToDo })
    }
    const DeleteToDo = (i) => {
        dispatch({ type: "DeleteToDo", payload: i.id })
    }
    const [inputState, setInputState] = useState("")
    return (
        <div className="App">
            <div className='input_section'>
                <div><input type="text" onChange={e => setInputState(e.target.value)}></input></div>
                <div><button onClick={() => AddToDo(inputState)}>Добавить задачу</button></div>
            </div>
            <div className='todo_list'>
                {ToDoArray.length > 0 ?
                    ToDoArray.map((task, index) =>
                        <ToDoPlaceholder text={task.text} date={task.date} index={index} close={() => DeleteToDo(task)} />
                    ) :
                    <div>Все задачи выполнены</div>}
            </div>
        </div>
    );
}

export default App;
