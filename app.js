require('dotenv').config()

const connectDB = require('./config/db')

const express = require('express')
const app = express()

// middleware to parse json and urlencoded request body
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// tasks routes
app.use('/api/v1/tasks', require('./routes/tasksRoutes'))

const PORT = process.env.PORT || 5000

// Connection to the database & app launch
const startApp = async () => {
  try {
    const conn = await connectDB(process.env.MONGO_URI)

    console.log(`MongoDB connected in ${conn.connection.host}`)

    app.listen(PORT, () => console.log(`Server listening on port ${PORT}...`))
  } catch (error) {
    console.log(`Error: ${error.messsage}`)
  }
}

startApp()
