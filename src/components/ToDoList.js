import { ToDoPlaceholder } from './ToDoPlaceholder';
export const ToDoList = ({ ToDoArray, DeleteToDo }) => {
    return (
        <div className='todo_list'>
            {ToDoArray.length > 0 ?
                ToDoArray.map((task, index) =>
                    <ToDoPlaceholder text={task.text} date={task.date} key={index} close={() => DeleteToDo(task)} />
                ) :
                <div>Все задачи выполнены</div>}
        </div>

    )
}
