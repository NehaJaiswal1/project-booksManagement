const mongoose = require('mongoose')

const userSchema = mongoose.Schema({

    title: {
        type: String,
        required: true,
        enum: ["Mr", "Mrs", "Miss"],
        trim: true
        
    },

    name: {
        type: String,
        required: true,
        trim: true
    },

    phone: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    }, 

    password: {
        type: String,
        trim: true,
        required: true,
        min: 8,
        max: 15
    },


    address: {
         street: {type: String},
         city: {type: String},
         pincode: {type: String}
        }
   
},
{ timestamps: true })

module.exports = mongoose.model('user', userSchema)