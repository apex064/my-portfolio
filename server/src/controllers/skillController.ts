import { Request, Response } from 'express';
import prisma from '../utils/prisma';

export async function listSkills(req: Request, res: Response) {
  const skills = await prisma.skill.findMany();
  res.json(skills);
}

export async function createSkill(req: Request, res: Response) {
  const data = req.body;
  const skill = await prisma.skill.create({ data });
  res.json(skill);
}

export async function updateSkill(req: Request, res: Response) {
  const { id } = req.params;
  const data = req.body;
  const skill = await prisma.skill.update({ where: { id: Number(id) }, data });
  res.json(skill);
}

export async function deleteSkill(req: Request, res: Response) {
  const { id } = req.params;
  await prisma.skill.delete({ where: { id: Number(id) } });
  res.status(204).send();
}