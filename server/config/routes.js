var Pets = require('../controllers/pets.js');
var mongoose = require('mongoose');
// var Pet = mongoose.model('Pet');

module.exports = function(app) {
    //Get all restaurant
    app.get('/pet', function(request, response) {
        console.log('Get all restaurants is hit in route.js');
        Pets.all(request, response)
    })
    //Create a new pet
    app.post('/pet', function(request, response) {
        console.log('Creating new pet @route.js');
        Pets.create(request, response)
    })
    //Update pet
    app.put('/pet/:id', function(request, response) {
        console.log('Update product at route hit');
        Pets.update(request, response)
    })
    // Get a specific pet
    app.get('/pet/:id', function(request, response) {
        console.log('Getting one pet @routes');
        Pets.getOne(request, response)
    })
    // Remove adopted pet
    app.delete('/pet/:id', function(request, response) {
        console.log('Adoping pet @route.js hit');
        Pets.delete(request, response)
    })
    // Update likes of a specific pet
    app.get('/pet/like/:id', function(request, response) {
        console.log('Update pet\'s likes @route.js hit');
        Pets.updateLike(request, response)
    })
}