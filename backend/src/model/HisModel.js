const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/model');
const Schema = mongoose.Schema;
const HisBookSchema = new Schema({
    typeTime: String,
    idClinic: {
        type: Schema.Types.ObjectId,
        ref: 'clinic'
    },
    iduser: {
        type: Schema.Types.ObjectId,
        ref: 'account'
    },

}, {
    collection: 'his'
});
const hisModel = mongoose.model('his', HisBookSchema);
module.exports = hisModel