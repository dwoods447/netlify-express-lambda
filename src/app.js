const express = require('express');
const serverless = require('serverless-http');

const app = express()

const router = express.Router()

router.get('/', (req, res)=> {
   res.json({
      message: 'Hello from the Express Server'
   })
})

router.get('/test', (req, res)=> {
   res.json({
      message: 'Hello Test!!!!'
   })
})

app.use('/.netlify/functions/app', router)

module.exports = app;
module.exports.handler = serverless(app);