import { initDbConnection } from "./config/database";
import interventionRouter from "./routes/interventionRoutes";
import express, { Express } from "express"
import { seed } from "./seed";

export async function buildServer(): Promise<Express> {
  const app = express();

  //Initialize in-memory mongodb database
  await initDbConnection()

  //Populate database
  await seed()

  //Load Routes
  app.use('/', interventionRouter);

  return app
}