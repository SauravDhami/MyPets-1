const mongoose = require('mongoose');

const orderschema = mongoose.Schema(
   { 
    reviewer={
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:true
    },
    product={
        type:Number,
        required:true,
    },
    comment={
        type:String,
        required:true,
    },
    rating={
        type:Number,
        required:true,
        enum:['1','2','3','4','5']
    },
}
);
const order = mongoose.model('Order',orderschema);
module.exports=order;