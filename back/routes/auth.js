const router = require ('express').Router();
const User = require ('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


//Facebook login
/*router.post('/facebook/login', passport.authenticate('facebook-token'), (req,res)=>{
    return res.json(req.user)
});*/


//Login
router.post("/login", async (req, res) => {
    const user = await User.findOne({email: req.body.email});
    if(!user) return res.status(404).json({msg: "The email is incorrect"});

    let validPassword = bcrypt.compareSync(req.body.password, user.password);

    if(!validPassword) return res.status(500).json({msg:"The password is incorrect"});

    const token = jwt.sign(
        {id: user._id},
        process.env.SECRET,
        {
            expiresIn: 8600
        });

    delete user._doc.password;

    console.log(user);

    res.status(200).json({user, token});

});

//Signup
router.post("/signup", (req, res) => {

    if(req.body.password !== req.body.confirmPassword) return res.status(500).json({msg: "The password doesn't match"});

    const salt = bcrypt.genSaltSync(256);
    const hashedPassword = bcrypt.hashSync(req.body.password, salt);

    req.body.password = hashedPassword;

    User.create(req.body)

        .then(() => {
            res.status(201).json({msg: "The user was succesfully created"})
        })
        .catch(err => {
            res.status(500).json({err, msg: "The user can't be created"})
        })

});

//Update?
/*router.patch("/:id",upload.single("picture"), (req, res) => {
    let user = {};

    Object.keys(req.body).forEach(key => {
        user[key] = req.body[key];
    });
    if(req.file) user.profile_picture = req.file.url;


    User.findByIdAndUpdate(req.params.id, {$set: user}, {new:true})
        .then(user => {
            res.status(200).json({user});
        })
});*/


module.exports = router;