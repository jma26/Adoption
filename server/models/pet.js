var mongoose = require('mongoose');

var PetSchema = new mongoose.Schema({
    Name: { type: String, 
        unique: true, 
        required: [true, 'Name is required'], 
        minlength: [3, 'Name must be at least 3 characters long']},
    Type: { type: String, 
        required: [true, 'Type is required'], 
        minlength: [3, 'Type must be at least 3 characters long']},
    Description: { type: String, 
        required: [true, 'Description is required'], 
        minlength: [3, 'Description must be at least 3 characters long']},
    Like: { type: Number, default: 0},
    Skill_1: { type: String },
    Skill_2: { type: String },
    Skill_3: { type: String }
})

var Pet = mongoose.model('Pet', PetSchema);