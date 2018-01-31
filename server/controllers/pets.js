var mongoose = require('mongoose');
var Pet = mongoose.model('Pet');

module.exports = {
    // Get all pets
    all: function(request, response) {
        Pet.find({}).sort('Type').exec(function(err, result) {
            if (err) {
                response.json(err);
            } else {
                response.json(result);
            }
        })
    },
    // Add a pet
    create: function(request, response) {
        console.log(request.body);
        var pet = new Pet({
            Name: request.body.name, 
            Type: request.body.type, 
            Description: request.body.description, 
            Skill_1: request.body.skill1, 
            Skill_2: request.body.skill2, 
            Skill_3: request.body.skill3
        });
        pet.save(function(err, result) {
            if (err) {
                console.log('Unsuccessful creation');
                response.json(err);
            } else {
                console.log('Successful creation');
                Pet.find({}, function(err, result) {
                    if (err) {
                        response.json(err);
                    } else {
                        response.json(result);
                    }
                })
            }
        })
    },
    // Retrieve a specific pet information
    getOne: function(request,response) {
        Pet.find({_id: request.params.id}, function(err, result) {
            if (err) {
                console.log('Something went wrong');
                response.json(err);
            } else {
                console.log('Found that one specific pet!');
                response.json(result);
            }
        })
    },
    updateLike: function(request, response) {
        Pet.update({_id: request.params.id}, {$inc: {Like: 1}}, function(err, result) {
            if (err) {
                console.log('Something went wrong updating the like by 1');
                response.json(err);
            } else {
                Pet.find({_id: request.params.id}, function(err, result) {
                    if (err) {
                        response.json(err);
                    } else {
                        // Successful update, grabbing data to update component
                        response.json(result);
                    }
                })
            }
        } )
    },
    // edit: function(request, response) {
    //     Product.findOneAndUpdate({_id: request.params.id}, {$set: {title: request.body.title, price: request.body.price, image_url: request.body.url}}, { runValidators: true, new: true }, function(err, result) {
    //         console.log('Edit controllers is hit');
    //         if (err) {
    //             response.json(err);
    //         } else {
                    // response.json(err);
    //         }
    //     })
    // },
    // addReview: function(request, response) {
    //     console.log(request.body);
    //     Restaurant.update({_id: request.params.id}, {$push: {review: request.body}}, {runValidators: true}, function(err, result) {
    //         if (err) {
    //             response.json(err);
    //         } else {
    //             response.json(result);
    //         }
    //     })
    // },
    // Adopting a pet and removing from database
    delete: function(request, response) {
        console.log(request.params.id);
        Pet.remove({_id: request.params.id}, function(err, result) {
            if (err) {
                response.json(err);
                console.log('Something went wrong adoping this pet');
            } else {
                console.log('Adoption successful');
                response.json(result);
            }
        })
    },
    update: function(request, response) {
        console.log('Updating now....');
        console.log(request.body);
        Pet.update(
            {_id: request.params.id},
            {$set: {Name: request.body.name, 
                Type: request.body.type, 
                Description: request.body.description,
                Skill_1: request.body.skill1,
                Skill_2: request.body.skill2,
                Skill_3: request.body.skill3
             }},
             {runValidators: true}, function(err, result) {
            if (err) {
                response.json(err);
            } else {
                console.log('Successful update');
                response.json(result);
            }
        })
    }
}