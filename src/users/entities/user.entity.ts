import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  nickName: { type: String, required: true },
  email: { type: String, required: true },
  passWord: { type: String, required: true },
  birthDate: { type: Date, required: true },
});

export interface User {
  id: string;
  name: string;
  nickName: string;
  email: string;
  passWord: string;
  birthDate: Date;
}
