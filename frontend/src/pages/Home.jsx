import React, { useEffect, useState } from "react";
import API from "../api";
import { Link } from "react-router-dom";
export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    API.get("/").then((res) => setPosts(res.data));
  }, []);
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">All Blog Posts</h2>
      {posts.map((post) => (
        <div key={post._id} className="border p-4 rounded mb-4 shadow">
          <h3 className="text-lg font-bold">{post.title}</h3>
          <p className="text-sm text-gray-600">
            By {post.author} - {new Date(post.timestamp).toLocaleString()}
          </p>
          <Link
            to={`/post/${post._id}`}
            className="text-blue-500 mt-2 inline-block"
          >
            Read More →
          </Link>
        </div>
      ))}
    </div>
  );
}
