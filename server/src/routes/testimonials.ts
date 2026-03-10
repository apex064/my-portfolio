import { Router } from 'express';
import {
  listTestimonials,
  createTestimonial,
  updateTestimonial,
  deleteTestimonial,
} from '../controllers/testimonialController';
import { authenticateToken } from '../middleware/auth';

const router = Router();

router.get('/', listTestimonials);
router.post('/', authenticateToken, createTestimonial);
router.put('/:id', authenticateToken, updateTestimonial);
router.delete('/:id', authenticateToken, deleteTestimonial);

export default router;
