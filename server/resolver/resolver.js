import { books, authors } from '../data/static.js';
const resolvers = {
	Query: {
		books: () => books,
		book: (parent, args) => books.find((book) => book.id == args.id),
		authors: () => authors,
		author: (parent, args) =>
			authors.find((author) => author.id == args.id),
	},
	Book: {
		author: (parent, args) => {
			return authors.find((author) => parent.authorId == author.id);
		},
	},
};
export { resolvers };
