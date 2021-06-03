const mongoose = require('mongoose');

const productschema = mongoose.Schema(
    {
        name: {
            type: string,
            required: true,
        },

        breed: {
            type: String,
        },

        description: {
            type: String,
            required: true,
        },

        price: {
            type: Number,
            required: true,
        },

        rating: {
            type: Number,
            enum: ['1', '2', '3', '4', '5'],
        },

        numReviews: {
            type: Number,
        },

        image: {
            type: String,
            required: true,
        },

        // insurance: Array,
    },
    { timestamps: true }
);

const product = mongoose.model('Product', productschema);

module.exports = product;
