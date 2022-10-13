const express = require('express')
const getTeamName = require('./getTeamName')

const api = express()

const PORT = process.env.PORT || 3000

api.get('/hello', getTeamName)

api.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
})



