import mongoose, { Schema } from 'mongoose';

const BookSchema = new Schema(
	{
		name: String,
		genre: String,
		authorId: String,
	},
	{
		collection: 'Book',
	},
);
const Book = mongoose.model('Book', BookSchema);
export default Book;
