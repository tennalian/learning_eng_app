import mongoose from 'mongoose';

const listSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  word: { type: mongoose.Schema.Types.ObjectId, ref: 'Word', required: true }
});

export const Word = mongoose.model('List', listSchema);
