import express, { Request, Response } from 'express'
import mongoose from 'mongoose'
require('dotenv/config')


const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const SERVER_PORT = process.env.SERVER_PORT

const app = express()

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.bpobqoi.mongodb.net/?retryWrites=true&w=majority`)
.then((data)=>{
    console.log('MongoDB Conectado com sucesso!')
})
.catch((erro) =>{
    console.log('Erro ao conectar ao MongoDB', erro.message)
})

app.get('/', (req:Request, res:Response) =>{
    return res.send('Hello World!')
})

app.listen(`${SERVER_PORT}`)