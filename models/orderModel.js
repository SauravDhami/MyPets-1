const mongoose = require('mongoose');

const orderschema = mongoose.Schema(
   { 
    buyer={
        type:mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:true
    },
    product={
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product',
        required:true,
    },
    quantity={
        type:Number,
        required:true,
        default: 1 ,
    },
    totalPrice={
        type:Number,
        required:true,
    },
    deliveryAddress={
        type:String,
        required:true

    },

    status:{
        type:String,
        enum: ['Pending','Shipping','Completed'],
        required:true
    }
}
);
const order = mongoose.model('Order',orderschema);
module.exports=order;