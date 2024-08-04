/* eslint-disable react/prop-types */
import { useState } from "react";
import { v4 as uuid } from "uuid";

const Input = ({ todos, setTodos }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos(() => {
      return [...todos, { id: uuid(), todo: newTodo, complete: false, userId: 12121 }];
    });
    setNewTodo("");
  };

  return (
    <div className="mb-4">
      <h1 className="text-grey-darkest">Todo List</h1>
      <form
        className="flex mt-4"
        onSubmit={handleSubmit}
      >
        <input
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
          placeholder="Add Todo"
        />
        <button
          type="submit"
          className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal-600"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default Input;
