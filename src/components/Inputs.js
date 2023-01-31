export const Inputs = ({ setInputState, AddToDo, inputState }) => {
    return (
        <div className='input_section'>
            <div><input type="text" onChange={e => setInputState(e.target.value)}></input></div>
            <div className='add_button'><button onClick={() => AddToDo(inputState)}>Добавить задачу</button></div>
        </div>
    )
}