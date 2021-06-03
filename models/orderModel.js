const mongoose = require('mongoose');

const orderschema = mongoose.Schema(
   { 
    buyerId={
        type:Number,
        required:true
    },
    productId={
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
        enum: ['Pendinng', 'Completed'],
        required:true
    }
}
);
const order = mongoose.model('Order',orderschema);
module.exports=order;