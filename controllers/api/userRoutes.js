const router = require('express').Router()
router.post('/', async (req,res) => {
  try {
    const userData = await User.create(req.body)
    res.status(200).json(userData)
  } catch (error) {
    res.status(500).json(error)
  }
})
module.exports = router