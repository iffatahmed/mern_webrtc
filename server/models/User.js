const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    userId: String,
    emailId: String,
    authenticatedBy: String,
    name: {
        familyName: String, 
        givenName: String },
    credits: { type: Number, default: 0 }
});

mongoose.model('users',userSchema);