const express = require("express");
const {
  getAllBlogsController,
  createBlogController,
  updateBlogController,
  getBlogIdController,
  deleteBlogController,
  userBlogController,
} = require("../controllers/blogController");

//router object
const router = express.Router();

//routes
//Get || all blogs
router.get("/all-blog", getAllBlogsController);

//Post || create blog
router.post("/create-blog", createBlogController);

//PUT || update blog
router.put("/update-blog/:id", updateBlogController);

//Get || single blog details
router.get("/get-blog/:id", getBlogIdController);

//Delete || Delete blog
router.delete("/delete-blog/:id", deleteBlogController);

//Get || user blog 
router.get("/user-blog/:id", userBlogController);
module.exports = router;
