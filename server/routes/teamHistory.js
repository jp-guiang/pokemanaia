const express = require('express')
const db = require('../db/db')

const router = express.Router()

router.post('/', (req, res) => {
  const team = req.body
  db.addTeam(team)
    .then(() => {
      res.json({ team })
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Failed to add team' })
    })
})

router.get('/', (req, res) => {
  db.getTeamHistory()
    .then((result) => {
      console.log('result', result)
      res.json(result)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Could not get all team history' })
    })
})

router.delete('/', (req, res) => {
  db.deleteAllTeamHistory()
    .then(() => {
      res.json()
    })
    .catch((err) => {
      console.log(err)
      res
        .status(500)
        .json({ message: 'Could not delete previous team history' })
    })
})

module.exports = router
