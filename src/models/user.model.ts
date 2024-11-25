import mongoose from 'mongoose';

interface IUser {
  name: string;
  email: string;
  age: number;
}

const userSchema = new mongoose.Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, required: true },
});

const User = mongoose.model<IUser>('User', userSchema);

export default User;
