const router = require ('express').Router();
const User = require ('../models/User');

router.post('/facebook/login', passport.authenticate('facebook-token'), (req,res)=>{
    return res.json(req.user)
});

//Logout
router.get('/logout', (req,res)=>{
    req.logout();
    return res.status(200).json({message: 'Successfully log out'})
});

//Login
router.post('/login', passport.authenticate('local'), (req,res)=>{
    Volunteer.findById(req.user.id)
        .populate('organizations')
        .then(user => {
            return res.status(200).json(user);
        })
        .catch(e=>{
            return res.status(401).json(e)
        })
});

//Signup
router.post('/signup', (req,res)=>{
    User.register(req.body, req.body.password)
        .then(user=>{
            return res.status(200).json(user)
        })
        .catch(e=>{
            return res.status(401).json(e)
        })
});


module.exports = router;