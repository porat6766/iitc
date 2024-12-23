const Post = require("../Model/postModel.js");

const postController = {
  // Get all posts
  getPost: async (req, res) => {
    try {
      const posts = await Post.find();
      res.status(200).json({ message: "Posts fetched successfully", posts });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "Error fetching posts", error: error.message });
    }
  },

  getPostByID: async (req, res) => {
    try {
      const { id } = req.params;
      const post = await Post.findById(id);
      res.status(200).json({ message: "Posts fetched successfully", post });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "Error fetching post", error: error.message });
    }
  },

  // Update a post by ID
  updatePost: async (req, res) => {
    try {
      const { id } = req.params;
      const { title, content } = req.body;

      const updatedPost = await Post.findByIdAndUpdate(
        id,
        { title, content },
        { new: true, runValidators: true }
      );

      if (!updatedPost) {
        return res.status(404).json({ message: "Post not found" });
      }

      res
        .status(200)
        .json({ message: "Post updated successfully", data: updatedPost });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "Error updating post", error: error.message });
    }
  },

  addPost: async (req, res) => {
    try {
      const { title, content } = req.body;

      const newPost = new Post({
        title,
        content,
      });

      const savedPost = await newPost.save();
      res
        .status(201)
        .json({ message: "Post created successfully", data: savedPost });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "Error creating post", error: error.message });
    }
  },

  removePost: async (req, res) => {
    try {
      const { id } = req.params;

      const deletedPost = await Post.findByIdAndDelete(id);

      if (!deletedPost) {
        return res.status(404).json({ message: "Post not found" });
      }

      res
        .status(200)
        .json({ message: "Post deleted successfully", data: deletedPost });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .json({ message: "Error deleting post", error: error.message });
    }
  },
};

module.exports = postController;
