import mongoose, {Schema} from 'mongoose';

const PersonSchema = Schema({
   name: String,
   age: Number,
   nationality: String
});
//model validation

PersonSchema.pre('save', next => {
  now = new Date();
  if(!this.createdAt) {
    this.createdAt = now;
  }
  next();
});

const Person = mongoose.model("Person", PersonSchema);

export default Person;