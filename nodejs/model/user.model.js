const mongoose = require("mongoose");

const AddressSchema = new mongoose.Schema({
    location: {
        type: String,
        required: false
    },
    ward: {
        type: Number,
        required: false
    }
})

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        maxlength: 70,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        email: ['admin', 'seller', 'customer'],
        default: 'customer'
    },
    status: {
        type: String,
        email: ['active', 'inactive'],
        default: 'inactive'
    },
    image: [String],
    address: {
        shipping: AddressSchema,
        billing: AddressSchema
    }
}, {
    timestamps: true
});

const User = mongoose.model("User", UserSchema)

module.exports = User;