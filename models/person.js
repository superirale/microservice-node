import mongoose, {Schema} from 'mongoose';

const personSchema = Schema({
   name: String,
   age: Number,
   nationality: String
});
//model validation
const Person = mongoose.model("Person", personSchema);

export default Person;