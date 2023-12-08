const withAuth = require('../utils/auth')

const router = require('express').Router()

router.get('/home', async (req,res) => {
  try {
    res.render('home')
  } catch (error) {
    res.status(500).json(error)
  }
}) 

router.get('/', async (req,res) => {
  try {
    res.render('login') 
  } catch (error) {
    res.status(500).json(error)
  }
}) 


module.exports = router
