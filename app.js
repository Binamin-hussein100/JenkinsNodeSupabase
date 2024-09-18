const express = require('express')
const app = express()
const compression = require('compression')
const cors = require('cors')


app.use(compression())

app.use(cors({
    origin: '*',
    credentials: true,
}))


app.get('/',(req,res)=>{
    console.log(process.env.DATABASE_URL)
    res.send("Hello: DONE")
  }) 

module.exports = app