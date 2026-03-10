import { Request, Response } from 'express';
import prisma from '../utils/prisma';

export async function listTestimonials(req: Request, res: Response) {
  const testimonials = await prisma.testimonial.findMany();
  res.json(testimonials);
}

export async function createTestimonial(req: Request, res: Response) {
  const data = req.body;
  const t = await prisma.testimonial.create({ data });
  res.json(t);
}

export async function updateTestimonial(req: Request, res: Response) {
  const { id } = req.params;
  const data = req.body;
  const t = await prisma.testimonial.update({ where: { id: Number(id) }, data });
  res.json(t);
}

export async function deleteTestimonial(req: Request, res: Response) {
  const { id } = req.params;
  await prisma.testimonial.delete({ where: { id: Number(id) } });
  res.status(204).send();
}