import express from "express";
const router = express.Router();
import {
  createBlogPost,
  getAllBlogPosts,
  getBlogPostById,
  updateBlogPost,
  deleteBlogPost,
} from "../controllers/blogController.js";
// Create a blog post
router.post("/", createBlogPost);

// Get all blog posts
router.get("/", getAllBlogPosts);

// Get a blog post by ID
router.get("/:id", getBlogPostById);

//// Update a blog post by ID
router.put("/:id", updateBlogPost);
// Delete a blog post by ID
router.delete("/:id", deleteBlogPost);
export default router;
