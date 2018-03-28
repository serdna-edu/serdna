import mongoose from 'mongoose';


const Schema = mongoose.Schema;

const emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const incorrectEmailPrompt = 'Please fill a valid email address';

function validateEmail(email) {
  return emailPattern.test(email);
}

export const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: 'Email address is required',
    validate: [validateEmail, incorrectEmailPrompt],
    match: [emailPattern, incorrectEmailPrompt]
  }
});
