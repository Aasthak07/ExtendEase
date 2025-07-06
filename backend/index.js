const express = require('express');
const UserRouter = require('./routers/userRouter'); //importing user router
const adminRouter = require('./routers/admin'); // or './routes/admin' if that's your folder name
const cors = require('cors');
const extensionRouter = require('./routers/extensionRouter');
const ratingRouter = require('./routers/ratingRouter');
require('./connection'); // Import database connection

//creating new express app

const app = express();

const port = 5000;

//middleware

app.use(cors({
    origin: '*'
}));

app.use(express.json({ limit: '10mb' })); //to parse json data from request body with increased limit
app.use(express.urlencoded({ limit: '10mb', extended: true })); // to parse urlencoded data with increased limit

app.use('/user', UserRouter);
app.use('/admin', adminRouter);
app.use('/extensions', extensionRouter);
app.use('/rating', ratingRouter);

//routes or endpoints
app.get('/', (req, res) => {
    res.send('Response From Express')
})

app.get('/add', (req, res) => {
    res.send('Response From Add All Route')
})

app.get('/getall', (req, res) => {
    res.send('Response From Get All Route')
})

app.listen(port, () => {
    console.log(`Server is running on Port - ${port}`);
})