const mongoose = require('mongoose');

const orderschema = mongoose.Schema(
   { 
    buyer={
        type:Number,
        required:true
    },
    product={
        type:Number,
        required:true,
    },
    quantity={
        type:Number,
        required:true,
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