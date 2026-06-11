import { Response } from 'express';

const clients = new Map<number, Set<Response>>();

export function addClient(userId: number, res: Response): void {
  if (!clients.has(userId)) clients.set(userId, new Set());
  clients.get(userId)!.add(res);
}

export function removeClient(userId: number, res: Response): void {
  const userClients = clients.get(userId);
  if (!userClients) return;
  userClients.delete(res);
  if (userClients.size === 0) clients.delete(userId);
}

export function publishToUser(userId: number, event: string, data: unknown): void {
  const userClients = clients.get(userId);
  if (!userClients) return;
  const payload = `event: ${event}\ndata: ${JSON.stringify(data)}\n\n`;
  for (const res of userClients) res.write(payload);
}