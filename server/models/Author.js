import mongoose, { Schema } from 'mongoose';

const AuthorSchema = new Schema(
	{
		name: String,
		age: Number,
	},
	{
		collection: 'Author',
	},
);
const Author = mongoose.model('Author', AuthorSchema);
export default Author;
