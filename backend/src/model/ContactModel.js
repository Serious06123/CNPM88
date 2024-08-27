const mongoose = require('mongoose');
const AccountModel = require('./AccountsModel');
mongoose.connect('mongodb://localhost:27017/model');
const Schema = mongoose.Schema;
const ContactSchema = new Schema({
    // iduser: String,
    fullname: String,
    phone: String,
    text: String,
}, {

    collection: 'Contact'

});
const ContactModel = mongoose.model('contact', ContactSchema);
module.exports = ContactModel