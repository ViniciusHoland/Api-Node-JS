import express from 'express'
// la no packge.json tem que informar no type o module devido a forma nova
// a forma antiga era const express = require('express')

const app = express()

app.use(express.json())

const user = []

app.post('/users', (request, response) => {

    const {name,age,email } = request.body

    const userNovo = {name,age,email}

    user.push(userNovo)

    response.send('ok post deu certo')



})

app.get('/users', (request,response) => {

    response.send(user)

})

app.listen(3000)


/*
    criar nossa api de usuario

   
    - criar um usuario
    - listar todos os usuarios
    - editar um usuario
    - criar um usuario


*/