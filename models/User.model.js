const { Schema, model } = require('mongoose')
const { ENUM_ROLES } = require('../const/user.const')
const { STUDENT, DEV, TA, PM } = require('../const/user.const')
const userSchema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: String,
    profileImg: { type: String, default: 'https://i.stack.imgur.com/l60Hf.png' },
    description: { type: String, default: 'No existe descripción.' },
    role: {
      type: String,
      trim: true,
      enum: ENUM_ROLES,
      default: STUDENT,
    }
  },
  {
    timestamps: true
  }
);


UserModel = model('User', userSchema)
module.exports = UserModel


