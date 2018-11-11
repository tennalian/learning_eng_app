import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import wordsApi from './routes/words';
import DB from '../../mongo.config';

mongoose.connect(DB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", wordsApi);

app.listen(port);

