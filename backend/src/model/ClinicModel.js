const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/model');
const Schema = mongoose.Schema;
const ClinicSchema = new Schema({
    name: String,
    idDoctor: {
        type: Schema.Types.ObjectId,
        ref: 'account'
    },
    phonenumber: String,
}, {
    collection: 'clinic'
});

const ClinicModel = mongoose.model('clinic', ClinicSchema);

module.exports = ClinicModel