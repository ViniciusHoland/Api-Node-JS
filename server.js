import express from 'express'
// la no packge.json tem que informar no type o module devido a forma nova
// a forma antiga era const express = require('express')

const app = express()

app.get('/users', (request,response) => {

    response.send('Ok, deu bom')

})

app.listen(3000)


