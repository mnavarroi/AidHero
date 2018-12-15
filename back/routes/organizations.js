const router = require ('express').Router();
const Organization = require ('../models/Organization');
const User = require ('../models/User');

function isAuth(req,res,next){
    if(req.isAuthenticated()){
        return next()
    }
    res.send("Thou shall not pass")
}

//Get all Organizations
router.get('/', (req,res)=>{
    Organization.find()
        .populate('owner')
        .then(organization =>{
            return res.status(202).json(organization);
        })
        .catch(e=>{
            return res.status(500).json(e)
        })
});

//Post new Organization
router.post('/', (req,res)=>{
    const organization = new Organization ({
        owner : req.body.owner,
        organization_name : req.body.organization_name,
        description: req.body.description
    });
    organization.save()
        .then(organization =>{
            return res.status(202).json(organization);
        })
        .catch(e=>{
            return res.status(500).json(e)
        })
});


//Get an Organization
router.get('/:id', (req,res)=>{
    Organization.findById(req.params.id)
        .populate('owner')
        .then(organization=>{
            if(!organization) return res.status(404);
            return res.status(202).json(organization);
        })
        .catch(e=>{
            return res.status(500).json(e)
        })
});

//Edit an Organization
router.patch('/:id', (req,res)=>{
    Organization.findByIdAndUpdate(req.params.id, req.body, {new:true})
        .then(organization=>{
            return res.status(202).json(organization)
        })
        .catch(e=>{
            return res.status(500).json(e)
        })
});

//Delete an Organization
router.delete('/:id', (req,res,next)=>{
    Organization.findByIdAndRemove(req.params.id)
        .then(organization=>{
            return res.status(202).json(organization)
        })
        .catch(e=>{
            return res.status(500).json({ message: "Organization can't be deleted"})
        })
});

module.exports = router;