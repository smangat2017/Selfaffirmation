var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var responseSchema = new Schema({
	writing: { type: String, required: true },
	name: { type: String, required: true },
	to:{ type: String, required: true },
	from: { type: String, required: true },
	created_at: Date,
});

var Response = mongoose.model('Response', responseSchema);

// make this available to our users in our Node applications
module.exports = Response;
