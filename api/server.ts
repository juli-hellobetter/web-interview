import { buildServer } from "./buildServer";
import { closeDbConnection } from "./config/database";

const PORT = 5000;

async function start(){
  const app = await buildServer()

  const server = await app.listen(PORT)

  console.log(`Server is running on port ${PORT}`);

  server.on('close', async () => {
    await closeDbConnection();
    console.log('Server closed gracefully');
  });
}

start()