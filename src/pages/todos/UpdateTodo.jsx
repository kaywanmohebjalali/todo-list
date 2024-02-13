import { Link } from "react-router-dom";
import todoContext from "../../contex/todoContext";
import { useContext, useState } from "react";

const UpdateTodo = ({ todo }) => {
  const { updateTodo } = useContext(todoContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handlerUpdate = async () => {
    await updateTodo(setLoading, setError, todo);
  };

  if (error) {
    setTimeout(() => {
      setError(false);
    }, 2000);
  }

  return (
    <div className="flex items-center">
      <Link
        onClick={handlerUpdate}
        className={
          (todo.completed && "text-gray-400 hover:text-indigo-700") ||
          " hover:text-indigo-700"
        }
      >
        {(loading && (
          <p className=" ml-4 h-4 w-4  border-t-2 border-r-2 border-indigo-500 rounded-full  animate-spin "></p>
        )) ||
          (error && (
            <p className="mx-2  h-5 w-5  text-red-500 rounded-full animate-bounce">
              Error
            </p>
          )) || (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          )}
      </Link>
    </div>
  );
};

export default UpdateTodo;
