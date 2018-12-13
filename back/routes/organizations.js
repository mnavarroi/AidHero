const router = require ('express').Router();
const Organization = require ('../models/Organization');
const User = require ('../models/User');

function isAuth(req,res,next){
    if(req.isAuthenticated()){
        return next()
    }
    res.send("Thou shall not pass")
}

//Post new ONG
router.post('/', (req,res)=>{
    req.body.owner = req.user._id
    Organization.create(req.body)
        .then(organization=>{
            return User.findByIdAndUpdate(req.user._id, {$push:{ organizations: organization._id }}, {new: true})
                .then(user=>{
                    return res.status(202).json(user)
                })
                .catch(e=>{
                    return res.status(500).json(e)
                })
        })
        .catch(e=>{
            return res.status(401).json(e)
        })
});

//Get all ONGs
router.get('/', (req,res)=>{
    Organization.find()
        .populate('owner')
        .then(organization =>{
            return res.status(202).json(organization);
        })
        .catch(e=>{
            return res.status(500).json(e)
        })
})

//Get an ONG
router.get('/:id', (req,res)=>{
    Organization.findById(req.params.id)
        .then(organization=>{
            if(!organization) return res.status(404)
            return res.status(202).json(organization);
        })
        .catch(e=>{
            return res.status(500).json(e)
        })
});

//Edit a ONG
router.put('/:id', (req,res)=>{
    Organization.findByIdAndUpdate(req.params.id, req.body, {new:true})
        .then(organization=>{
            return res.status(202).json(organization)
        })
        .catch(e=>{
            return res.status(500).json(e)
        })
});

//Delete a ONG
router.delete('/:id', (req,res,next)=>{
    Organization.findByIdAndRemove(req.params.id)
        .then(organization=>{
            return res.status(202).json(organization)
        })
        .catch(e=>{
            return res.status(500).json({ message: 'Something is off'})
        })
});

module.exports = router;