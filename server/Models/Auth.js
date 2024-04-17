const mongoose = require('mpngoose')


const auth = new mongoose.Scheema({
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,   
        required : true
    }
})


const Workout = mongoose.model('Workout', auth);

module.exports = Workout