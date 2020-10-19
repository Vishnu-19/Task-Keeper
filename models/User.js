const mongoose=require('mongoose');
const bcrpyt =require('bcrypt');

const Schema=mongoose.Schema;
const userSchema= new Schema({
    username :{
        type:String,
        required :true,
        min:6,
        max:15
    },
    password :{
        type:String,
        required:true
    },
    role :{
        type:String,
        enum :['user','admin'],
        required: true
    },
    todos:[{type : mongoose.Schema.Types.ObjectId,ref:'todo'}]
});

const User =mongoose.model('User', userSchema);


userSchema.pre('save',function(next){
    if(!this.isModified('password'))
      return next();
    bcrpyt.hash(this.password,10,(err,passwordHash)=>{
        if(err)
            return next(err);
        this.password =passwordHash;
        next();
    })
});


userSchema.methods.comparePassword = function(password,cd){
    bcrpyt.compare(password,this.password,(err,isMatch)=>
    {
        if(err)
            return(err);
        else{
            if(!isMatch)
                    return cb(null,isMatch);
            else
                return cb(null,this);
                }
        
    })
}
module.exports =User;