import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  filter: "all",
};

const todoSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    // добавление задачи
    addTask: (state, action) => {
      state.tasks.push({
        id: Date.now(),
        text: action.payload,
        comlited: false,
      });
    },
    // изменние статуса выполенния
    toggleComlited: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.comlited = !task.comlited;
      }
    },
    // удаление задачи
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    // фильтрация задач
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addTask, toggleComlited, deleteTask, setFilter } =
  todoSlice.actions;

export default todoSlice.reducer;
