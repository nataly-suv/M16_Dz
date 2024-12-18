import "./App.css";
import TaskAdd from "./components/TaskAdd/TaskAdd";
import TaskList from "./components/TaskList/TaskList";

function App() {
  return (
    <div className="App">
      <h1 className="title">TO-DO LIST</h1>
      <TaskAdd />
      <TaskList />
    </div>
  );
}

export default App;
