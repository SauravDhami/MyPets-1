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

        overallRating: {
            type: Number,
        },

        numReviews: {
            type: Number,
        },

        image: {
            type: String,
            required: true,
        },

        isAvailable: {
            type: Boolean,
            required: true,
        },

        // insurance: Array,
    },
    { timestamps: true }
);

const product = mongoose.model('Product', productschema);

module.exports = product;
