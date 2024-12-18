import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addTask } from "../../redux/todo/todoSlice";
import "./taskAdd.css";

const TaskAdd = () => {
  const [taskValue, setTaskValue] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskValue.trim()) {
      dispatch(addTask(taskValue));
      setTaskValue("");
    }
  };

  return (
    <div className="taskAdd">
      <h2>Добавить задачу</h2>
      <form onSubmit={handleSubmit} className="taskAdd__form">
        <input
          type="text"
          className="taskAdd__input"
          placeholder="Введите новую задачу"
          value={taskValue}
          onChange={(e) => setTaskValue(e.target.value)}
        />
        <button type="submit" className="taskAdd__btn">
          Добавить
        </button>
      </form>
    </div>
  );
};

export default TaskAdd;
