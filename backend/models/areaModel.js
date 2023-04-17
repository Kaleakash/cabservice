const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const areaSchema = mongoose.Schema({
  areaName: { type: String, required: true},
  // unique and uniqueCaseInsensitive is used here to support validation via 'mongoose-unique-validator'
  latitude: { type: Number, required: true },
  longitude : { type: Number, required: true }
});

//userSchema.plugin(uniqueValidator);
// added plugin to mongoose.
// will check uniqueness before saving to DB. Will throw appropriate error.

module.exports = mongoose.model('Area', areaSchema);
