const router = require ('express').Router();
const User = require ('../models/User');

//Get Volunteers
router.get('/', (req,res)=>{
    User.find()
        .then(users =>{
            return res.status(202).json(users);
        })
        .catch(e=>{
            return res.status(500).json(e)
        })
});

//Get one Volunteer
router.get('/:id', (req,res)=>{
    Volunteer.findById(req.params.id)
        .populate('experiences')
        .then(user=>{
            if(!user) return res.status(404);
            return res.status(202).json(user);
        })
        .catch(e=>{
            return res.status(500).json(e)
        })
});

//Edit a Volunteer
router.put('/:id', (req,res)=>{
    User.findByIdAndUpdate(req.params.id, req.body, {new:true})
        .then(user=>{
            return res.status(202).json(user)
        })
        .catch(e=>{
            return res.status(500).json(e)
        })
});

//Delete a Volunteer
router.delete('/:id', (req,res)=>{
    User.findByIdAndRemove(req.params.id)
        .then(user=>{
            return res.status(202).json(user)
        })
        .catch(e=>{
            return res.status(500).json({ message: 'Something is off'})
        })
});

module.exports = router;