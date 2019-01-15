const express = require("express");
const router = express.Router();
const Post = require('../models/Post');


//Create a new post
router.post('/', (req,res)=>{
    const post = new Post ({
        post_name: req.body.post_name,
        author: req.body.author,
        organization_name: req.body.organization_name,
        description: req.body.description,
        needs: req.body.needs,
        location: req.body.location,
        pics: req.body.pics,
    });
    post.save()
        .then(post =>{
            return res.status(202).json(post);
        })
        .catch(e=>{
            return res.status(500).json(e)
        })
});

//Get all posts
router.get('/', (req,res) => {
    Post.find()
        .then(posts => {
            console.log(posts);
            res.status(202).json(posts)
        })
        .catch(err => {
            console.log(err)
        })
});


//Get one post
router.get('/:id', (req,res)=>{
    console.log(req.params.id);
    Post.findById(req.params.id)
        .then(post=>{
            if(!post) return res.status(404);
            return res.status(202).json(post);
        })
        .catch(e=>{
            return res.status(500).json(e)
        })
});

//Get each user projects
router.get('/owner/:id', (req,res)=>{
    console.log(req.params.id);
    Post.find({author:req.params.id})
        .then(post=>{
            if(!post) return res.status(404);
            return res.status(202).json(post);
        })
        .catch(e=>{
            return res.status(500).json(e)
        })
});

//Update a post
router.patch('/:id', (req,res)=>{
    Post.findByIdAndUpdate(req.params.id, req.body, {new:true})
        .then(post=>{
            return res.status(202).json(post)
        })
        .catch(e=>{
            return res.status(500).json(e)
        })
});

//Delete a post
router.delete('/:id', (req,res,next)=>{
    Post.findByIdAndRemove(req.params.id)
        .then(post=>{
            return res.status(202).json(post)
        })
        .catch(e=>{
            return res.status(500).json({ message: "This user can't be deleted"})
        })
});

module.exports = router;