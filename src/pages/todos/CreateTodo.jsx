import { useContext, useState } from "react";
import todoContext from "../../contex/todoContext";

const CreateTodo = () => {
  const [title, setTitle] = useState(false);
  const [required, setRequired] = useState(0);
  const { addTodo } = useContext(todoContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handlerSubmit = async (e) => {
    e.preventDefault();
    setRequired(Math.random());
    if (title) {
      setError(false);
      setLoading(true);
      await addTodo(setLoading, setError, setSuccess, title);
    }
  };
  if (error) {
    setTimeout(() => {
      setError(false);
    }, 2000);
  }

  if (success) {
    setTimeout(() => {
      setSuccess(false);
    }, 2000);
  }

  return (
    <div>
      <h1 className="my-5 text-xl font-bold">Create Todo:</h1>
      <form
        onSubmit={handlerSubmit}
        className="border-b-[1px] border-black pb-4"
        action="#"
      >
        <div className="flex items-center">
          <input
            onBlur={(e) => setRequired(false)}
            onChange={(e) => {
              setTitle(e.target.value);
              setRequired(true);
            }}
            className="w-1/2 p-2 border-2 border-gray-300  rounded-md focus:ring-4 ring-indigo-500 ring-opacity-50 focus:border-transparent outline-none"
            type="text"
          />
          <button
            className="flex items-center ml-5 py-[0.55rem] px-4 bg-indigo-500 rounded-md text-white"
            type="submit"
            value="Create"
          >
            <span>Create</span>
          </button>
          {loading && (
            <p className=" ml-4 h-5 w-5  border-t-2 border-r-2 border-indigo-500 rounded-full  animate-spin "></p>
          )}
          {error && (
            <span className="ml-4  h-5 w-5  text-red-500 rounded-full  animate-bounce">
              Error
            </span>
          )}
          {success && (
            <span className="ml-4  h-5 w-5  text-green-600 rounded-full  animate-bounce">
              success
            </span>
          )}
        </div>
        <p className="text-sm mt-2 text-red-500">
          {required && !title ? "Title is required" : ""}
        </p>
      </form>
    </div>
  );
};
export default CreateTodo;
