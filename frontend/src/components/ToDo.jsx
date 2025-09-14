import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const ToDo = () => {
  const [todo, setTodo] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    try {
      await axios.post(
        "http://localhost:5000/todos/createTodo",
        {
          title: todo,
          description,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Todo added ✅");
    } catch (error) {
      if (error.response) {
        console.log(error.response);
      }
    }

    setTodo("");
    setDescription("");
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-center text-black mb-6">
          Add a New ToDo
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Todo Input */}
          <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            placeholder="Enter ToDo"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            required
          />

          {/* Description Input */}
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter Description"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />

          {/* Buttons */}
          <div className="flex justify-between gap-4">
            <button
              type="submit"
              className="w-1/2 py-2 bg-black text-white rounded-lg hover:bg-gray-600 transition"
            >
              Add Todo
            </button>
            <button
              type="button"
              onClick={() => navigate("/getTodo")}
              className="w-1/2 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
            >
              Get Todo
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
