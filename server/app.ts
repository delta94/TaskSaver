import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import cors from 'cors';
import { checkAuth } from './api/utils/checkAuth';
import { tasksRoutes } from './api/routes/tasks';
import { authRoutes } from './api/routes/auth';

mongoose.connect(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.66hev.mongodb.net/test?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

mongoose.connection.on('connected', () => console.log('MongoDB Connected!'));

const app = express();
const prefix = '/api';

app.use(cors());

// @ts-ignore
app.use(express.json({ limit: '10mb', extended: true }));
app.use(express.urlencoded({ limit: '10mb', extended: false }));

app.use(`${prefix}/tasks`, checkAuth, tasksRoutes);
app.use(`${prefix}/auth`, authRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port: ${port}`));

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use((error, _req, res, _next) => {
  res.status(error.status || 500);
  res.json({ message: error.message });
});

module.exports = app;