const express = require('express')
const app = express()

PORT=3000

app.listen(PORT,()=>{
 console.log(`Server for E-commerce at ${PORT}`)
})