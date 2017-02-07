const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
  if (!req.session.user) {
    res.render('index', {title: 'Home'})
  } else {
    const user = JSON.stringify(req.session.user)
    res.send(`${user}`)
    // res.render(create new game)
  }
})

module.exports = router
