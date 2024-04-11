require('dotenv').config
const express = require("express")
const workoutRoutes = app.require('./Routes/routes.js')

// express app
const app = express() 

// middleware   
app.use(express.json())
app.use((req,res,next) => {
    console.log(req.path, req.method )
    next()
})

//routes
app.use('/api/workouts', workoutRoutes)

//listen to routes
const port = 3000   
app.listen(port.env.PORT,() => {
    console.log("Server is running on port 8080!!!")
})

process.env