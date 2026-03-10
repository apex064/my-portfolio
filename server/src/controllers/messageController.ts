import { Request, Response } from 'express';
import prisma from '../utils/prisma';

export async function listMessages(req: Request, res: Response) {
  const messages = await prisma.message.findMany();
  res.json(messages);
}

export async function createMessage(req: Request, res: Response) {
  const { name, email, message } = req.body;
  const msg = await prisma.message.create({ data: { name, email, message } });
  res.status(201).json(msg);
}