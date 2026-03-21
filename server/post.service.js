const postModel = require("../models/post.model")

class PostService {
    async create(post){
         const newPost = await postModel.create(post)
         return newPost
    }
    async getAll(){
        const posts = await postModel.find()
        return posts
    }
    async delete(id){
        const post = await postModel.findByIdAndDelete(id)
        return post
    }
    async update(id, post){
        if(!post) throw new Error("Post not found")
            const isPost = await postModel.findById(id)
            if(!isPost) throw new Error("Post not found")   
        const updatedPost = await postModel.findByIdAndUpdate(id, post, { new: true })
        return updatedPost
    }
    async getOne(id){
        const post = await postModel.findById(id)   
        return post}
}
module.exports = new PostService()