import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";

export default function CreatePost() {
  const [form, setForm] = useState({ title: "", content: "", author: "" });
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/", form);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-semibold">Create New Blog</h2>
      <input
        name="title"
        placeholder="Title"
        className="w-full border p-2 rounded"
        onChange={handleChange}
        required
      />
      <input
        name="author"
        placeholder="Author"
        className="w-full border p-2 rounded"
        onChange={handleChange}
        required
      />
      <textarea
        name="content"
        placeholder="Content"
        rows="6"
        className="w-full border p-2 rounded"
        onChange={handleChange}
        required
      />
      <button className="bg-green-600 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
}
