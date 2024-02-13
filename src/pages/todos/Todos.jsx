import { useContext, useEffect, useState } from "react";
import todoContext from "../../contex/todoContext";
import axios from "axios";
import { Link } from "react-router-dom";
import FilterTodo from "./FilterTodo";
import CreateTodo from "./CreateTodo";
import UpdateTodo from "./UpdateTodo";
import DeleteTodo from "./DeleteTodo";

const Todos = () => {
  const { state, getTodos } = useContext(todoContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    (async () => {
      await getTodos(setLoading, setError, setSuccess);
    })();
  }, []);

  return (
    <>
      <CreateTodo />
      <FilterTodo />
      <section
        className={
          (!loading &&
            "mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 ") ||
          "h-[93vh] flex items-center justify-center"
        }
      >
        {(loading && (
          <h1 className="text-2xl border-t-4 border-r-4 border-indigo-500 rounded-full p-8 animate-spin"></h1>
        )) ||
          (error && <h1>error</h1>) ||
          (state.todos &&
            state.todos.map((todo) => (
              <div
                className=" flex gap-2 justify-between items-center px-4 py-8 border-2 shadow-lg "
                key={Math.random()}
              >
                <p>
                  {(todo.completed && <del>{todo.title}</del>) || (
                    <span>{todo.title}</span>
                  )}
                </p>
                <div className="flex gap-2">
                  <UpdateTodo todo={todo} />
                  <DeleteTodo todo={todo} />
                </div>
              </div>
            )))}
      </section>
    </>
  );
};
export default Todos;
