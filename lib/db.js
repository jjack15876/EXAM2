var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
 
var Blog = new Schema({
	Username: String,
	Article: String,
	CreateDate: Date
});
 
var Comment = new Schema({
	Visitor: String,
	Comment: String,
	MessageID: Schema.Types.ObjectId,
	CreateDate: Date
});

mongoose.model( 'Blog', Blog );
mongoose.model( 'Comment', Comment );
mongoose.connect('mongodb://worster:z8302177@ds047732.mongolab.com:47732/110110630');
