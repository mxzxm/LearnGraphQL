import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './schema/schema.js';
import { resolvers } from './resolver/resolver.js';
import mongoose from 'mongoose';
import { mongoDataMethods } from './data/db.js';

const connectDB = () => {
	try {
		mongoose.set('strictQuery', true);
		mongoose.connect(
			`mongodb://admin:example@localhost:27017/?retryWrites=true&w=majority`,
			{
				useNewUrlParser: true,
			},
		);
		console.log('MongoDB connected');
	} catch (error) {
		console.log(error.message);
		process.exit();
	}
};
connectDB();
const app = express();
const server = new ApolloServer({
	typeDefs,
	resolvers,
	context: () => ({ mongoDataMethods }),
});
await server.start();
server.applyMiddleware({ app });
app.listen(3000, () => {
	console.log(`PORT: 3000`);
});
