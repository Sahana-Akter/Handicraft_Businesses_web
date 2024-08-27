const mongoose= require('mongoose');
const Schema= mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    profilePictureUrl: {
        type: String, // Ensure this is of type String
        default: '',
    }
});

const UserModel = mongoose.model('handicraftdatabase', UserSchema);

module.exports =UserModel;