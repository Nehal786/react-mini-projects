const AddTask = () => {
    return (
        <div className="todo-container">
            <h1>Todo</h1>
            <div className="todo-input">
                <input type="checkbox" /> 
                <input type="text" placeholder="Add task..." />
            </div>
            <button className="add-btn">Add</button>

        </div>
    )
}

export default AddTask;