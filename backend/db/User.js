const mongoose = require('mongoose');
mongoose.connect('mongodb://0.0.0.0:27017/e-commerce');

const userSchema = new mongoose.Schema({
	name:String,
	email:String,
	password:String
	
});


module.exports =mongoose.model('users',userSchema);


