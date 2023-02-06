import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from './schema/schema.js';
import { resolvers } from './resolver/resolver.js';
const app = express();
const server = new ApolloServer({
	typeDefs,
	resolvers,
});
await server.start();
server.applyMiddleware({ app });
app.listen(3000, () => {
	console.log(`PORT: 3000`);
});
