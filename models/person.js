const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PersonSchema = Schema({
   name: String,
   age: Number,
   nationality: String
});

PersonSchema.pre('save', next => {
  now = new Date();
  if(!this.createdAt) {
    this.createdAt = now;
  }
  next();
});

const Person = mongoose.model("Person", PersonSchema);

module.exports = Person;