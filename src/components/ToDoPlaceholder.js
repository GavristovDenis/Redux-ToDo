
export const ToDoPlaceholder = ({ text, date, close }) => {
    return (
        <div>
            <div className="todo_card">
                <div>{text}</div>
                <div>{date}</div>
                <div onClick={() => close()}>&#10006;</div>
            </div>
        </div>
    )
}