import { Request, Response } from 'express';
import prisma from '../utils/prisma';

export async function listProjects(req: Request, res: Response) {
  const projects = await prisma.project.findMany();
  res.json(projects);
}

export async function createProject(req: Request, res: Response) {
  const { title, description, link, image } = req.body;
  const project = await prisma.project.create({ data: { title, description, link, image } });
  res.json(project);
}

export async function updateProject(req: Request, res: Response) {
  const { id } = req.params;
  const data = req.body;
  const project = await prisma.project.update({ where: { id: Number(id) }, data });
  res.json(project);
}

export async function deleteProject(req: Request, res: Response) {
  const { id } = req.params;
  await prisma.project.delete({ where: { id: Number(id) } });
  res.status(204).send();
}