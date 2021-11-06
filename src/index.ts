import { ApolloServer } from 'apollo-server-express';
import express, { Request, Response } from 'express';
import { createServer } from 'http';
import dotenv from 'dotenv-safe';
import cors from 'cors';
import compression from 'compression';
import path from 'path';
import schema from './graphql/schemas/schema';
import { performAstCodegen } from './codegen';



const startServer = async () => {
  const app = express();
  const server = new ApolloServer({
    schema,
  });

  app.use(cors());
  app.use(compression());

  await server.start();
  server.applyMiddleware({ app, path: '/graphql' });
  const httpServer = createServer(app);
  // Perform codegen when server starts
  performAstCodegen();

  app.use(express.static('public'));

  app.get('*', (req: Request, res: Response) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  });

  httpServer.listen(4000, () => {
    console.log(
      `🚀 Server ready at http://localhost:4000{server.graphqlPath}`
    );
  });
};

startServer();