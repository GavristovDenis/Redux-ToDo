
export const ToDoPlaceholder = ({ text, date, close }) => {
    return (
        <div>
            <div className="todo_card">
                <div>{text}</div>
                <div>Дата:{date}</div>
                <div><span className="close_button" onClick={() => close()}>&#10006;</span></div>
            </div>
        </div >
    )
}