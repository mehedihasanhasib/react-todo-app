/* eslint-disable react/prop-types */

const TodoList = ({ todos, setTodos }) => {
  const handleClick = (id) => {
    const newArr = todos.filter((todo)=>{
      if (todo.id !== id) {
        return todo;
      }
    })

    setTodos(newArr);
  };

  return (
    <div>
      {todos.length > 0 ? todos?.map((todo, index) => (
        <div key={index}>
          <div className="flex mb-4 items-center">
            <p className="w-full pl-1 text-grey-darkest">{todo.todo}</p>
            <button
              onClick={() => handleClick(todo.id)}
              className="flex-no-shrink p-2 ml-2 border-2 rounded text-red border-red hover:text-white hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        </div>
      )) : <h6 className="text-center">Nothing to show</h6>}
    </div>
  );
};

export default TodoList;
