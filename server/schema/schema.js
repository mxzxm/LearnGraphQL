import { gql } from 'apollo-server-express';
const typeDefs = gql`
	type Book {
		id: ID
		name: String
		genre: String
		author: Author
	}
	type Author {
		id: ID!
		name: String
		age: Int
	}
	# ROOT TYPE
	type Query {
		books: [Book]
		book(id: ID!): Book
		authors: [Author]
		author(id: ID!): Author
	}
`;
export { typeDefs };
