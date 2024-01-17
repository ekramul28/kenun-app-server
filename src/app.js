const express = require('express');
const applyMiddleWares = require('./middlewares');
const connectDB = require('./db/connectDB');
const app = express();
const port = process.env.PORT || 5000;

applyMiddleWares(app)



app.get('/health', (req, res) => {
    res.send('running Server')
})
app.listen(port, async () => {
    await connectDB()
    console.log(`this is the port ${port}`)
})