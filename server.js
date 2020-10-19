const express =require('express');
const mongoose=require('mongoose');
const axios =require('axios');

const app=express();
const PORT= process.env.PORT || 8080;
 
const routes = require('./routes/api');
const routes1=require('./routes/User');

/* const MONGODB_URI = 'mongodb+srv://Todo:Todo@cluster-todo-pte5n.mongodb.net/test?retryWrites=true&w=majority';
 */
mongoose.connect('mongodb://localhost:27017/gfg' ,{
    useNewUrlParser:true,
    useUnifiedTopology:true
});
mongoose.connection.on('connected', () =>{
    console.log('Mongoose is connected');
});

app.use(express.json());
app.use(express.urlencoded({ extended:false}));
app.use('/api',routes);
app.use('/User',routes1);




app.listen(PORT,console.log(`Server listening at ${PORT}`));