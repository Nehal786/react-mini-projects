import { useState } from "react";

const AddTask = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  function handleTodoList() {
    if (task.trim() === '') {
      return;
    }
    setTaskList([...taskList, task]);
    setTask("");
    console.log(taskList);
  }

  function deleteTodo (indexToBeDeleted) {
    
    const updatedList = taskList.filter((_, index) => index !== indexToBeDeleted)
    setTaskList(updatedList)
    
  }

  return (
    <div className="todo-container">
      <h1>Todo</h1>
      <div className="todo-input">
        <input
          type="text"
          placeholder="Add task..."
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
            // console.log(e.target.value)
          }}
        />
        <button
          className="add-btn"
          onClick={() => {
            handleTodoList();
          }}
        >
          Add
        </button>
      </div>
      <div className="todo-list">
        <ul className="list">
          {taskList.map((task, index) => (
            <li key={index}>
              <input type="checkbox" />
              {task}
              <div className="dlt-btn" ><button onClick={() => {
                deleteTodo(index)
              }}>❌</button></div>
              
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AddTask;
