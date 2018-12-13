const router = require ('express').Router();
const Comment = require ('../models/Comment');
const User = require ('../models/User');

//Post new Experience
router.post('/:id', (req,res,next)=>{
    req.body.owner = req.params.id
    Comment.create(req.body)
        .then(comment=>{
            return User.findByIdAndUpdate(req.params.id, {$push:{ comments: comment }}, {new: true})
                .then(user=>{
                    return res.status(201).json(user)
                })
                .catch(e=>{
                    return res.status(501).json({e})
                })
        })
        .catch(e=>{
            return res.status(401).json(e)
        })
});

//Get Experiences
router.get('/', (req,res)=>{
    Comment.find()
        .then(comment =>{
            return res.status(202).json(comment);
        })
        .catch(e=>{
            return res.status(500).json(e)
        })
});

//Get one Experience
router.get('/:id', (req,res)=>{
    Comment.findById(req.params.id)
        .then(comment=>{
            if(!comment) return res.status(404);
            return res.status(202).json(comment);
        })
        .catch(e=>{
            return res.status(500).json(e)
        })
});

//Edit a Experience
router.put('/:id', (req,res)=>{
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