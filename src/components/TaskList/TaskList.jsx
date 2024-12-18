import { useSelector, useDispatch } from "react-redux";
import { IoCloudDoneOutline } from "react-icons/io5"; // <IoCloudDoneOutline />
import { IoCloudDone } from "react-icons/io5"; // <IoCloudDone />

import { toggleComlited, deleteTask } from "../../redux/todo/todoSlice";
import "./taskList.css";
import Filter from "../TaskFilter/Filter";

const TaskList = () => {
  const tasks = useSelector((state) => {
    if (state.todos.filter === "complited") {
      return state.todos.tasks.filter((task) => task.comlited);
    } else if (state.todos.filter === "outComplited") {
      return state.todos.tasks.filter((task) => !task.comlited);
    } else {
      return state.todos.tasks;
    }
  });
  const dispatch = useDispatch();

  // Задача выполнена или нет
  const hadnleIsComplited = (id) => {
    dispatch(toggleComlited(id));
  };

  // удаление задачи
  const hahdleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div className="taskList">
      <h2>Спиок задач</h2>
      <Filter />
      <ul className="taskList__ul">
        {tasks.map((task, i) => (
          <li className="taskList__li" key={task.id}>
            <div className="taskList__item">
              {++i}. {task.text}
            </div>
            <div className="taskList__item">
              <span onClick={() => hadnleIsComplited(task.id)}>
                {task.comlited ? (
                  <IoCloudDone className="taskList__item_iconDone" />
                ) : (
                  <IoCloudDoneOutline className="taskList__item_iconOut" />
                )}
              </span>

              <button
                className="taskList__item_btn"
                onClick={() => hahdleDeleteTask(task.id)}
              >
                Удалить
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
