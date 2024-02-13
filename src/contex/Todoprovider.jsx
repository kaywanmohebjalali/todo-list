import { useReducer, useState } from "react";
import todoContext from "./todoContext";
import reducer from "./reducer";
import axios from "axios";
const intialState = {
  todos: [],
};
const TodoProvider = ({ children }) => {
  const [state, disptch] = useReducer(reducer, intialState);

  const getTodos = async (Loading, Error, Success, limit = null) => {
    try {
      const response =
        (limit &&
          (await axios.get(
            `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`
          ))) ||
        (await axios.get(`https://jsonplaceholder.typicode.com/todos`));

      disptch({ type: "SET_TODOS", payload: response.data });
      Loading(false);
      Error(false);
      Success(true);
    } catch (error) {
      Loading(false);
      Error(error.message);
      Success(false);
    }
  };

  const addTodo = async (Loading, Error, Success, title) => {
    try {
      const response = await axios.post(
        `https://jsonplaceholder.typicode.com/todos`,
        {
          title: title,
          completed: false,
        }
      );
      disptch({ type: "ADD_TODOS", payload: response.data });
      Loading(false);
      Error(false);
      Success(true);
    } catch (error) {
      Loading(false);
      Error(error.message);
      Success(false);
    }
  };

  const updateTodo = async (Loading, Error, todo) => {
    try {
      Loading(true);
      const response = await axios.put(
        `https://jsonplaceholder.typicode.com/todos/${todo.id}`,
        {
          id: todo.id,
          title: todo.title,
          completed: !todo.completed,
        }
      );
      disptch({ type: "UPDATE_TODOS", payload: response.data });
      Loading(false);
      Error(false);
    } catch (error) {
      Loading(false);
      Error(error.message);
    }
  };

  const deleteTodo = async (Loading, Error, todo) => {
    try {
      Loading(true);
      const response = await axios.delete(
        `https://jsonplaceholder.typicode.com/todos/${todo.id}`
      );

      response && disptch({ type: "DELETE_TODOS", payload: todo.id });
      Loading(false);
      Error(false);
    } catch (error) {
      Loading(false);
      Error(error.message);
    }
  };

  return (
    <todoContext.Provider
      value={{
        state: state,
        getTodos: getTodos,
        addTodo: addTodo,
        updateTodo: updateTodo,
        deleteTodo: deleteTodo,
      }}
    >
      {children}
    </todoContext.Provider>
  );
};

export default TodoProvider;
