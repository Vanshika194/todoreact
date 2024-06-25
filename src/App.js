import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [todo, settodo] = useState([]);
  

  let saveTodoList = (event) => {
    let todoName = event.target.todoName.value;
    if (!todo.includes(todoName)) {
      let finalTodo = [...todo, todoName];
      settodo(finalTodo);
    } else {
      alert("ToDo Already Exist");
    }

    event.preventDefault();
  };
  let list = todo.map((value, index) => {
    return(
      <TodoListItems value={value} key={index} indexno={index} 
      todo={todo} 
      settodo={settodo} />
    )
  });
  return (
    <div className="App">
      <div className="cont">
        <h1>To-Do List</h1>
        <form onSubmit={saveTodoList}>
          <input type="text" name="todoName" placeholder="Add Task" />{" "}
          <button>Save</button>
        </form>
        <div className="todoItems">
          <ul>
            {list}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;

function TodoListItems({value,indexno,todo,settodo}) {

  let [Tstatus,setTstatus]=useState(false);

  let deleteRow=()=>{
    let finalData=todo.filter((v,i)=> i!=indexno);
    settodo(finalData);
  }
    let checkStatus=()=>{
      setTstatus(!Tstatus);
    }


  return (
    <li className={(Tstatus)?'todocheck' : ''} onClick={checkStatus}>
      {value}
      <span onClick={deleteRow}>
      <i class="fa-solid fa-trash"></i>
      </span>
    </li>
  )
}
