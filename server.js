import express, { response } from 'express'
// la no packge.json tem que informar no type o module devido a forma nova
// a forma antiga era const express = require('express')
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express()


// informa ao express que vamos usar json nas requisições
app.use(express.json())

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

app.get('/users', async (request,response) => {

    // o await é um sinal para esperar uam requisição que vai ser buscada e avisar ao js que espere
    // o prisma vai pegar no banco de dados os users e o find many vai buscar esses users cadastrados
    
    let users = []
    if(request.query ) {
        users  = await prisma.user.findMany({
            where: {
                name: request.query.name,
                age: request.query.age
            }
        })
    } else {
        users = await prisma.user.findMany()
    }

    response.status(200).json(users)

})

app.put('/users/:id', async (request, response) => {

    await prisma.user.update({
        where: {
            id: request.params.id
        },
        data: {
            email: request.body.email,
            name: request.body.name,
            age: request.body.age
        }


    })

    response.status(201).json(request.body)


})

app.delete('/users/:id', async (request, response) => {

    await prisma.user.delete({
        where: {
            id: request.params.id,
        },
    })

    response.status(200).json({message : 'Usuario deletado com sucesso'})

})

app.listen(3000)


/*
    criar nossa api de usuario

   
    - criar um usuario
    - listar todos os usuarios
    - editar um usuario
    - criar um usuario


*/