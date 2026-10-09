import http from 'node:http';
import { getTasks, toggleTask } from './tasks.js';

const PORT = Number(process.env.PORT) || 3000;

function sendJson(res, statusCode, body) {
  const payload = JSON.stringify(body);
  res.writeHead(statusCode, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, PATCH, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  });
  res.end(payload);
}

function notFound(res) {
  sendJson(res, 404, { error: 'Not found' });
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url ?? '/', `http://${req.headers.host ?? 'localhost'}`);

  if (req.method === 'OPTIONS') {
    sendJson(res, 204, null);
    return;
  }

  if (req.method === 'GET' && url.pathname === '/tasks') {
    const status = url.searchParams.get('status') ?? 'all';
    sendJson(res, 200, getTasks(status));
    return;
  }

  const toggleMatch = url.pathname.match(/^\/tasks\/(\d+)\/toggle$/);
  if (req.method === 'PATCH' && toggleMatch) {
    const id = Number(toggleMatch[1]);
    const task = toggleTask(id);
    if (!task) {
      sendJson(res, 404, { error: 'Task not found' });
      return;
    }
    sendJson(res, 200, task);
    return;
  }

  if (req.method === 'GET' && url.pathname === '/health') {
    sendJson(res, 200, { ok: true });
    return;
  }

  notFound(res);
});

server.listen(PORT, () => {
  console.log(`Task API listening on http://localhost:${PORT}`);
});
