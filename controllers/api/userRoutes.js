const router = require('express').Router()
const {User} = require("../../models")
console.log("anybody there?")
router.post('/', async (req,res) => {
  try {
    const userData = await User.create({
      username: req.body.username,
      password: req.body.password,
    });
    req.session.save(() => {
      req.session.userId = userData.userId;
      req.session.username = userData.username;
      req.session.loggedIn = true; 
    })
    console.log(req.session.cookie, "wtf")
    res.status(200).json({userData, message: "logged in"})
  } catch (error) {
    console.error(error)
    res.status(500).json(error)
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        username: req.body.username
      }
    });
    if(!user) {
      res.status(400).json({message: "No User with that name."})
      return
    }
    const validPass = user.checkPassword(req.body.password)
    if(!validPass) {
      res.status(400).json({message: "Invalid Password."})
      return
    }

    req.session.save(() => {
      req.session.userId = user.userId;
      req.session.username = user.username;
      req.session.loggedIn = true; 
    })
    res.status(200).json({user, message: "You're logged in!"})
  } catch (error) {
    res.status(500).json(error)
  }
})

router.post("/logout", async (req, res) => {
  try {
    if(req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end()
      })
    }else {
      res.status(404).end()
    }

  } catch (error) {
    console.error(error)
    res.status(500).json(err)
  }
  
})


router.get("/all", async (req,res) => {
  try {
    const userData = await User.findAll()
    res.json(userData)
  } catch (error) {
    res.status(500).json(error)
  }
})

module.exports = router