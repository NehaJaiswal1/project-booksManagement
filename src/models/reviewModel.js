const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const reviewSchema = new mongoose.Schema({

    bookId: {
        type: ObjectId,
        ref: "book",
        required: true
    },
    reviewedBy: {
        type: String,
        required: true,
        default: "Guest"
    },
    reviewedAt: {
        type: Date,
       required: true,
       trim: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true,
        trim: true
    },
    review: {
        type: String,
        trim: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    deletedAt: {
        type: Date
    }
}
);

module.exports = mongoose.model("review", reviewSchema)