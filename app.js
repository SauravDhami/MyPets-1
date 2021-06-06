const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const app = express();

//importing config
require('dotenv/config');
port = process.env.PORT;

//middleware
app.use(morgan('dev'));

app.use(express.json());

//importing routes

const userRoutes = require('./routes/userRoutes');
// const orderRoutes = require('./routes/orderRoutes');
// const productRoutes = require('./routes/productRoutes');
// const reviewRoutes = require('./routes/reviewRoutes');
// const adminRoutes = require('./routes/adminRoutes');

//routers
app.use(`/users`, userRoutes);
// app.use(`/orders`, orderRoutes);
// app.use(`/products`, productRoutes);
// app.use(`/reviewss`, reviewRoutes);
// app.use(`/admins`, adminRoutes);

//database Connection
mongoose
    .connect(process.env.CONNECTION_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        dbName: 'MyPets',
    })

    .then(() => {
        console.log('Database Connection is ready!!');
    })

    .catch((err) => {
        console.log(err);
    });

//server initialization
app.listen(port, () => {
    console.log('Server is running at port 3300');
});
