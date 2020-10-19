const express=require ('express');

const router = express.Router();

const todo= require('../models/todo')



router.get('/', (req ,res)=>{
    todo.find({ })
        .then((data)=>{
            
            res.json(data);
        })
        .catch((error)=>{
            console.log('error: ',error);
        })
});
router.post('/save',(req,res) =>{
        console.log(req.body)
        const data=req.body;
        const newtodo= new todo(data);
        newtodo.save((error)=>{
            if(error){
                res.status(500).json({msg:"Server Error"});
            }
            else{ res.json({
                msg:"data received"
            });
        }
        })
       
})
router.route('/update').post(function(req,res){
const id = req.body.id
console.log(id);

    todo.findByIdAndUpdate(id,{"status": 1}, function(err, result){

        if(err){
            res.send(err)
        }
        else{
            res.send(result)
        }

    })
})
router.route('/delete').post(function(req, res){
    const id= req.body.id;
	todo.findByIdAndRemove(id, (err, todo) => {
        // As always, handle any potential errors:
        if (err) return res.status(500).send(err);
        // We'll create a simple object to send back with a message and the id of the document that was removed
        // You can really do this however you want, though.
        const responseq = {
            message: "Todo successfully deleted",
           
        };
        return res.status(200).send(responseq);
    });
});
module.exports = router;