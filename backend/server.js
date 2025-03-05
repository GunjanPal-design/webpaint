const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const userRoutes = require('./routes/userroute')
const UserModel = require('./model/User')
const app = express()


app.use(express.json())
app.use(cors('*'))
app.use('/user', userRoutes)
mongoose.connect('mongodb://localhost:27017/')

    .then(() => {
        console.log('server is successfully connected to database')
    }).catch((err) => {
        console.log(err)
    })

app.listen(8000, () => {
    console.log('server is running')
})