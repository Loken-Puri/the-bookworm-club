const { Schema, model } = require("mongoose");
const Book = require('./Book.model')

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true
    },
    
    email: {
      type: String,
      required: true,
      unique: true
    },

    password: {
      type: String,
      required: true,
    },

    firstName: {
      type: String
    },

    lastName: {
      type: String
    },

    favoriteBook: {

  },
    books: [{ type: Schema.Types.ObjectId, ref: Book }]
  }
);

const User = model("User", userSchema);

module.exports = User;
