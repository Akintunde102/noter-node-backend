import mongoose from 'mongoose';
import {Note, User} from './models';
import {DB_CONN_STRING} from '../utils/config';

const connectDb = () => {
  return mongoose.connect(DB_CONN_STRING, {useUnifiedTopology: true , useNewUrlParser: true, useFindAndModify: false});
};

export { connectDb, Note, User };