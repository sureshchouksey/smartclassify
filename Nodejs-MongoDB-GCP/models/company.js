var mongoose = require('mongoose');

var companySchema = mongoose.Schema({
	CompanyName: { type: String,required: true},
	Location: { type: String, required: true },
	Area: { type: String },
	Rating: { type: String, required: true },
	VisaType: { type: String, required: true },
	EstablishedDate:{ type: String},
	Technologies:{type:String},
	Reference:{ type: String },
	createdAt:{type:Date}
});

// Sets the createdAt parameter equal to the current time
companySchema.pre('save', next => {
  now = new Date();
  if(!this.createdAt) {
    this.createdAt = now;
  }
  next();
});

module.exports = mongoose.model('Company', companySchema);