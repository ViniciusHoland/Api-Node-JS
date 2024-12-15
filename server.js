import express from 'express'
// la no packge.json tem que informar no type o module devido a forma nova
// a forma antiga era const express = require('express')
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()


// informa ao express que vamos usar json nas requisições
app.use(express.json())

const users = []

app.post('/users', async (request, response) => {

    //const {name,age,email } = request.body

    //const userNovo = {name,age,email}

    await prisma.user.create({
        data: {
            email: request.body.email,
            name: request.body.name,
            age: request.body.age
        }
    })

    response.status(201).json(request.body)


})

app.get('/users', (request,response) => {

    response.status(200).json(users)

})

app.listen(3000)


/*
    criar nossa api de usuario

   
    - criar um usuario
    - listar todos os usuarios
    - editar um usuario
    - criar um usuario


*/