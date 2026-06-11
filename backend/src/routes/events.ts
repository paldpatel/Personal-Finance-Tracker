import { Router } from 'express';
import { authenticateToken } from '../middleware/auth';
import { addClient, removeClient } from '../services/sseService';

const router = Router();

router.get('/', authenticateToken, (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    Connection: 'keep-alive',
    'X-Accel-Buffering': 'no'
  });

  res.write(`event: connected\ndata: ${JSON.stringify({ message: 'SSE connection established' })}\n\n`);
  addClient(req.user!.id, res);

  const heartbeat = setInterval(() => {
    res.write(`event: ping\ndata: {}\n\n`);
  }, 30000);

  req.on('close', () => {
    clearInterval(heartbeat);
    removeClient(req.user!.id, res);
    res.end();
  });
});

export default router;