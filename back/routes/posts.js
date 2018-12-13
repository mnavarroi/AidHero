const router = require ('express').Router();
const Post = require ('../models/Post');
const Organization = require ('../models/Organization');

//Post new Event
router.post('/:id', (req,res,next)=>{
    req.body.owner = req.params.id
    Post.create(req.body)
        .then(post=>{
            return ONG.findByIdAndUpdate(req.params.id, {$push:{ posts: post }}, {new: true})
                .then(organization=>{
                    return res.status(201).json(organization)
                })
                .catch(e=>{
                    return res.status(501).json({e})
                })
        })
        .catch(e=>{
            return res.status(401).json(e)
        })
});

//Get all Events
router.get('/', (req,res)=>{
    Post.find()
        .populate('owner')
        .then(posts =>{
            return res.status(202).json(posts);
        })
        .catch(e=>{
            return res.status(500).json(e)
        })
})

//Get one Event
router.get('/:id', (req,res)=>{
    Post.findById(req.params.id)
        .populate('owner')
        .then(post =>{
            if(!post) return res.status(404)
            return res.status(202).json(post);
        })
        .catch(e=>{
            return res.status(500).json(e)
        })
});

//Edit a Event
router.put('/:id', (req,res)=>{
    Post.findByIdAndUpdate(req.params.id, req.body, {new:true})
        .then(post=>{
            return res.status(202).json(post)
        })
        .catch(e=>{
            return res.status(500).json(e)
        })
});

//Delete a Event
router.delete('/:id', (req,res,next)=>{
    Post.findByIdAndRemove(req.params.id)
        .populate("organization")
        .then(post=>{
            return res.status(202).json(post)
        })
        .catch(e=>{
            return res.status(500).json({ message: 'Something is off'})
        })
});

module.exports = router;