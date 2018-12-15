const router = require ('express').Router();
const User = require ('../models/User');

//Get Users
router.get('/', (req,res)=>{
    User.find()
        .then(users =>{
            return res.status(202).json(users);
        })
        .catch(e=>{
            return res.status(500).json(e)
        })
});

//Post new User
router.post('/', (req,res)=>{
    const user = new User ({
        name : req.body.name,
        last_name : req.body.last_name,
        password : req.body.password,
        email : req.body.email
    });

    user.save()
        .then(user =>{
            return res.status(202).json(user);
        })
        .catch(e=>{
            return res.status(500).json(e)
        })
});


//Get one Users
router.get('/:id', (req,res)=>{
    User.findById(req.params.id)
        .populate('experiences')
        .then(user=>{
            if(!user) return res.status(404);
            return res.status(202).json(user);
        })
        .catch(e=>{
            return res.status(500).json(e)
        })
});

//Edit a Users
router.patch('/:id', (req,res)=>{
    User.findByIdAndUpdate(req.params.id, req.body, {new:true})
        .then(user=>{
            return res.status(202).json(user)
        })
        .catch(e=>{
            return res.status(500).json(e)
        })
});

//Delete a Users
router.delete('/:id', (req,res)=>{
    User.findByIdAndRemove(req.params.id)
        .then(user=>{
            return res.status(202).json(user)
        })
        .catch(e=>{
            return res.status(500).json({ message: "The user can't be deleted"})
        })
});

module.exports = router;