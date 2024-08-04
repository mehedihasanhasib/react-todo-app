import { useEffect, useState } from "react";
import TodoList from "./Components/TodoList";
import Input from "./Components/Input";

function App() {

  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/todos?limit=2")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data.todos)
        setIsLoading(false)
      });
      
  }, []);
  return (
    <>
      <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
          <Input todos={todos} setTodos={setTodos} />
          {isLoading ? <h6 className="text-center">Todos is loading...</h6> : <TodoList todos={todos} setTodos={setTodos}/>}
        </div>
      </div>

      {/* <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green">Done</button> */}
    </>
  );
}

export default App;
