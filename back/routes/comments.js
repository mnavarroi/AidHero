const express = require("express");
const router = express.Router();
const Comment = require('../models/Comment');
const User = require('../models/User');

//Get Comment
router.get('/', (req,res) => {
  Comment.find()
      .then(comments => {
          console.log(comments)
          res.status(202).json(comments)
      })
      .catch(err => {
          console.log(err)
      })
});
//Post Comment
router.post('/', (req,res)=>{
    const comment = new Comment ({
        author : req.body.author,
        comment : req.body.comment
    });
        comment.save()
        .then(comment =>{
            return res.status(202).json(comment);
        })
        .catch(e=>{
            return res.status(500).json(e)
        })
});


//Get one Experience
router.get('/:id', (req,res)=>{
    console.log(req.params.id);
    Comment.findById(req.params.id)
        .then(comment=>{
            if(!comment) return res.status(404);
            return res.status(202).json(comment);
        })
        .catch(e=>{
            return res.status(500).json(e)
        })
});

//Update a Experience
router.patch('/:id', (req,res)=>{
    Comment.findByIdAndUpdate(req.params.id, req.body, {new:true})
        .then(comment=>{
            return res.status(202).json(comment)
        })
        .catch(e=>{
            return res.status(500).json(e)
        })
});


//Delete a Experience
router.delete('/:id', (req,res,next)=>{
    Comment.findByIdAndRemove(req.params.id)
        .then(comment=>{
            return res.status(202).json(comment)
        })
        .catch(e=>{
            return res.status(500).json({ message: 'Something is off'})
        })
});

module.exports = router;