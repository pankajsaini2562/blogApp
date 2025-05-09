import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../api";

export default function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ title: "", content: "", author: "" });

  useEffect(() => {
    API.get(`/${id}`).then((res) => setForm(res.data));
  }, [id]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.put(`/${id}`, form);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-semibold">Edit Blog Post</h2>
      <input
        name="title"
        value={form.title}
        className="w-full border p-2 rounded"
        onChange={handleChange}
        required
      />
      <input
        name="author"
        value={form.author}
        className="w-full border p-2 rounded"
        onChange={handleChange}
        required
      />
      <textarea
        name="content"
        value={form.content}
        rows="6"
        className="w-full border p-2 rounded"
        onChange={handleChange}
        required
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Update
      </button>
    </form>
  );
}
