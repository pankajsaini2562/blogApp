import express from "express";
import cors from "cors";
import databaseConnection from "../config/database.js";
import blogRoutes from "../routes/blogRoute.js";
const app = express();
app.use(cors());
app.use(express.json());
databaseConnection();
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
// Routes
app.use("/api/blog", blogRoutes);
