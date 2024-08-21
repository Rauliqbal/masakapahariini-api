import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import route from './src/router/index.js'
import cacheExpress from 'cache-express'

// Express App
const app = express()

// Middlewares
app.use(morgan('dev'))
app.use("/api/*",cors())
app.use('/api/*',cacheExpress({timeOut: 60000})) 

// Routes
app.get('/', (req, res) => {
   res.json({
      message: 'Welcome to Resepmasakan API!🥗🍜🍛🍲',
      documentation: 'link to documentation'
   })
})
app.use('/api/v1', route)


// Server 
app.listen(3000, () => {
   console.log('Resepmasakan is Running on port 3000!🥗🍜🍛🍲')
})