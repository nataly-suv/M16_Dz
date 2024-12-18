import { useSelector, useDispatch } from "react-redux";

import { setFilter } from "../../redux/todo/todoSlice";
import "./filter.css";

const Filter = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.todos.filter);

  return (
    <div className="filter">
      <button
        className="btn btn-all"
        onClick={() => dispatch(setFilter("all"))}
        disabled={currentFilter === "all"}
      >
        Все задачи
      </button>
      <button
        className="btn btn-complite"
        onClick={() => dispatch(setFilter("complited"))}
        disabled={currentFilter === "complited"}
      >
        Выполненные
      </button>
      <button
        className="btn btn-outComplite"
        onClick={() => dispatch(setFilter("outComplited"))}
        disabled={currentFilter === "outComplited"}
      >
        В работе
      </button>
    </div>
  );
};

export default Filter;
