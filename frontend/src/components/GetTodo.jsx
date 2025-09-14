import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const GetTodo = () => {
  const token = localStorage.getItem("token");
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();

  const getTheTodo = async () => {
    try {
      const res = await axios.get("http://localhost:5000/todos/getTodos", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTodos(res.data.result);
      console.log("Fetched todos ✅");
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  useEffect(() => {
    getTheTodo();
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 py-10 px-4">
      {/* Container */}
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-8">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-black mb-6">
          📋 Your Todos
        </h1>

        {/* Todo List */}
        {todos.length === 0 ? (
          <p className="text-gray-500 text-center">
            No todos available yet. Start by adding one!
          </p>
        ) : (
          <ul className="space-y-4">
            {todos.map((todo) => (
              <li
                key={todo._id}
                className="p-5 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition"
              >
                <h2 className="text-lg font-semibold text-gray-800">
                  {todo.title}
                </h2>
                <p className="text-gray-600 mt-1">{todo.description}</p>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Back Button */}
      <button
        type="button"
        onClick={() => navigate("/todo")}
        className="mt-6 w-40 py-2 bg-black text-white font-medium rounded-lg hover:bg-gray-600 transition"
      >
        ⬅ Go Back
      </button>
    </div>
  );
};

export default GetTodo;
