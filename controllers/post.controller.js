const postModel = require("../models/post.model");
const postService = require("../server/post.service");

class PostController {
  async getAll(req, res) {
    try {
      const posts = await postService.getAll();
      res.json(posts);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async create(req, res) {
    try {
      const { body, title } = req.body;
      const newPost = await postService.create(req.body, req.files.picture);
      res.status(201).json(newPost);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  async delete(req, res) {
    try {
      const post = await postService.delete(req.params.id);
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  async update(req, res) {
    try {
      const updatedPost = await postService.update(req.params.id, req.body);
      res.status(200).json(updatedPost);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  async getOne(req, res) {
    try {
      const post = await postService.getOne(req.params.id);
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}
module.exports = new PostController();
