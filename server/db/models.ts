import mongoose from 'mongoose';
 
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
  },
  { timestamps: true },
);


const noteSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
      validate: {
        validator: (value: string) => {
  
          // Check if value is empty then return true.
          if (value === "") {
            return true;
          }
  
          // If value is empty will not validate for mobile phone.
          return typeof value === 'string';
        },
        message: "{VALUE} is not valid"
      }
    },
    localKey: {
      type: String,
      required: true
    },
    localCreationTimeInUTC: {
      type: Number,
      required: true
    },
    localUpdateTimeInUTC: {
      type: Number,
      required: true
    }
  },
  { timestamps: true },
);
 
export const User = mongoose.model('Users', userSchema);
export const Note = mongoose.model('Notes', noteSchema);
