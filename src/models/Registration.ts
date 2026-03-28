import mongoose, { Schema, model, models } from 'mongoose';

const RegistrationSchema = new Schema({
  fullName: {
    type: String,
    required: [true, 'Please provide your full name'],
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address'],
  },
  phone: {
    type: String,
    required: [true, 'Please provide your phone number'],
  },
  location: {
    type: String,
  },
  service: {
    type: String,
    required: [true, 'Please select a service'],
  },
  message: {
    type: String,
  },
  submittedAt: {
    type: Date,
    default: Date.now,
  },
});

const Registration = models.Registration || model('Registration', RegistrationSchema);

export default Registration;
