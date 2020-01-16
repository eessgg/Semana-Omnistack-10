const express = require('express')
const mongoose =  require('mongoose')
const routes = require('./routes')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

mongoose.connect('mongodb+srv://esterdev:esterdev@omnistack-cjkv9.mongodb.net/omni10?retryWrites=true&w=majority',{ useUnifiedTopology: true , useNewUrlParser: true  })

app.use(routes)

app.listen(3333)