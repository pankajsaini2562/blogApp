import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import API from "../api";

export default function PostDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    API.get(`/${id}`).then((res) => setPost(res.data));
  }, [id]);

  const handleDelete = async () => {
    if (window.confirm("Are you sure?")) {
      await API.delete(`/${id}`);
      navigate("/");
    }
  };

  if (!post) return <p>Loading...</p>;

  return (
    <div className="border p-4 rounded shadow">
      <h2 className="text-2xl font-bold">{post.title}</h2>
      <p className="text-sm text-gray-600">
        By {post.author} - {new Date(post.timestamp).toLocaleString()}
      </p>
      <p className="mt-4">{post.content}</p>
      <div className="mt-6 space-x-4">
        <Link
          to={`/edit/${post._id}`}
          className="bg-yellow-500 text-white px-4 py-2 rounded"
        >
          Edit
        </Link>
        <button
          onClick={handleDelete}
          className="bg-red-600 text-white px-4 py-2 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
