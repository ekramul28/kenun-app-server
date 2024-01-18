const express = require('express');
const applyMiddleWares = require('./middlewares');
const connectDB = require('./db/connectDB');
const globalErrorHandler = require('./utils/globalErrorHandler');
const app = express();
const port = process.env.PORT || 5000;

applyMiddleWares(app)



app.get('/health', (req, res) => {
    res.send('running Server')
})
// handel error
app.all('*', (req, res, next) => {
    const error = new Error(`Can't find ${req.originalUrl} on the server`)
    error.status = 404;
    next(error);
})

app.use(globalErrorHandler)

app.listen(port, async () => {
    await connectDB()
    console.log(`this is the port ${port}`)
})