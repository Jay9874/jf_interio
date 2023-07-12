// Requiring mongoose
const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    description: {
        type: String,
        require: [true, 'No decription provided']
    },
    rating: Number,
    created_at: {
        type: String,
        required: ['true', 'Date missing']
    },
    likes: Number,
    comments: []
}
)