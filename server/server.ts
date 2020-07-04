import express from 'express';
import { connectDb, Note, User } from './db';
import  { PORT } from './utils/config';
import { statusCodes } from './utils/constants';
import ri from './utils/log';
import  bodyParser from 'body-parser';

// Create a new express app instance
const app: express.Application = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());

app.get('/notes', async function (req, res) {
  const notes =  await Note.find({});
  res.status(statusCodes.OK).json(notes);
});

app.post('/notes', async function (req, res) {
  const { localKey, note: noteText, remoteKey, localCreationTimeInUTC, localUpdateTimeInUTC = ''} = req.body;
  let noteDetails;
  if (!remoteKey){
    console.log('create new');
    noteDetails = await new Note({
      text: noteText,
      localCreationTimeInUTC,
      localUpdateTimeInUTC,
      localKey
     }).save();

  }

  if (remoteKey){
    console.log('update Old');
    noteDetails = await Note.findByIdAndUpdate(
    remoteKey
     ,{
       text: noteText,
       localUpdateTimeInUTC,
       localKey
     }, {
       new: true
     });  
  }


  console.log({text: noteText});
 

  res.status(statusCodes.OK).json(noteDetails);
});

app.post('/', async function (req, res) {
ri.show('Welcome Home');

});

connectDb().then(async () => {
    app.listen(PORT, () =>
      console.log(`Example app listening on port ${process.env.PORT}!`),
    );
});
