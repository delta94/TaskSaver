import mongoose from 'mongoose';

const taskSchema = mongoose.Schema({
  userId: { type: mongoose.SchemaTypes.ObjectId, required: true, ref: 'User' },
  title: { type: String, required: true },
  description: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, required: true }
});

export const Task = mongoose.model('Task', taskSchema);