var mongoose = require('mongoose');

var candidateSchema = mongoose.Schema({
	CandidateName: { type: String,required: true},
	Location: { type: String, required: true },
	Area: { type: String },
	Position: { type: String, required: true },
	VisaType: { type: String, required: true },
	Experience:{ type: String},
	Technologies:{type:String},
	CreatedAt:{type:Date}
});

// Sets the createdAt parameter equal to the current time
candidateSchema.pre('save', next => {
  now = new Date();
  if(!this.CreatedAt) {
    this.CreatedAt = now;
  }
  next();
});

module.exports = mongoose.model('Candidate', candidateSchema);