import mongoose, {Schema} from 'mongoose';

const personSchema = Schema({
   name: String,
   age: Number,
   nationality: String
});
const Person = mongoose.model("Person", personSchema);

export default Person;