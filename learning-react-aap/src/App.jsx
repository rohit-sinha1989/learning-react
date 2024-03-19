import AddToDo from "./components/AddToDo/AddToDo";
import AppName from "./components/AppName/AppName";
import ToDoItem1 from "./components/ToDoItem1/ToDoItem1";
import ToDoItem2 from "./components/ToDoItem2/ToDoItem2";

function App() {
  //return <h1>This is the best React Course</h1>

  return (
    <center className="todo-container">
      Placeholder
      <AppName />
      <div className="container text-center">
        <AddToDo />

        <ToDoItem1 />
        <ToDoItem2 />

        
      </div>
    </center>
  );
}

export default App;
