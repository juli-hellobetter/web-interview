import express from 'express';
import fs from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';

const __dirname = dirname(fileURLToPath(import.meta.url));

async function createServer() {
  const app = express();

  // Create Vite server in middleware mode
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });

  // Use vite's connect instance as middleware
  app.use(vite.middlewares);

  // Your custom API routes
  app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from Express!' });
  });

  // Serve index.html for all other routes (SPA fallback)
  app.use(/(.*)/, async (req, res, next) => {
    const url = req.originalUrl;

    try {
      // Read the index.html template file
      const templatePath = resolve(__dirname, 'index.html');
      let template = fs.readFileSync(templatePath, 'utf-8');

      // Apply Vite HTML transforms (for HMR, imports, etc.)
      template = await vite.transformIndexHtml(url, template);

      res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });

  const port = process.env.PORT || 4000;
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

createServer();
