import express from 'express'
import mongoose from 'mongoose'
import router from './routes'
require('dotenv/config')


const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
var SERVER_PORT = process.env.SERVER_PORT || 8000

const app = express()

app.use(express.json())
app.use(router)

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.bpobqoi.mongodb.net/?retryWrites=true&w=majority`)
.then((data)=>{
    console.log('MongoDB Conectado com sucesso!')
})
.catch((erro) =>{
    console.log('Erro ao conectar ao MongoDB', erro.message)
})

app.listen(SERVER_PORT)