const express = require('express');
const env = require('dotenv');
const app = express();
// const bodyParser = require('body-parser');
const mongoose = require('mongoose')


//  Routes
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin/auth');
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');

// get environment from env
env.config();


//  MongoDB connection
//  mongodb+srv://willee:<password>@clusterwhatever.gv3cy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
mongoose.connect (
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@clusterwhatever.gv3cy.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`, 
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useCreateIndex: true,
    }
).then(() => {
    console.log('Database connected'); //   Check from Server
});

app.use(express.json());

app.use('/api', authRoutes);
app.use('/api', adminRoutes);
app.use('/api', categoryRoutes);
app.use('/api', productRoutes);

// Check running on PORT from .env
app.listen(process.env.PORT, () => {
    console.log(`Server is running on PORT ${process.env.PORT}`);
})