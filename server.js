const express=require('express');
const dbConnect = require('./dbConnect/dbConnect');
const app=express();

const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./routes/userRoutes');
const eventRoutes = require('./routes/eventRoutes');
const rsvpRoutes = require('./routes/rsvpRoutes');
const errorHandler = require('./middlewares/errorHandler');

// Middleware
app.use(express.json());
app.use(cors());


// Routes
app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/rsvp', rsvpRoutes);

// Error Handler
app.use(errorHandler);


//Database connect
dbConnect();

//server
const PORT = process.env.PORT || 5050;

app.listen(PORT, () =>{
    
    console.log(`Server started on ${PORT}`);
    
});

module.exports = app;