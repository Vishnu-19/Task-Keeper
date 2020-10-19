const mongoose=require('mongoose');


const Schema=mongoose.Schema;
const todoSchema= new Schema({
    Item:String,
    status:Number,
    date: {
        type : String,
        default:Date.now()
    }
});

const todo =mongoose.model('todo', todoSchema);

module.exports =todo;