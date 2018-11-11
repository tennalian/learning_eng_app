import mongoose from 'mongoose';

const wordSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  value: { type: String, required: true },
  translate: String,
  type: Number,
});

export const Word = mongoose.model('Word', wordSchema);
