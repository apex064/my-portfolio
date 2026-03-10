import { Router } from 'express';
import {
  listSkills,
  createSkill,
  updateSkill,
  deleteSkill,
} from '../controllers/skillController';
import { authenticateToken } from '../middleware/auth';

const router = Router();

router.get('/', listSkills);
router.post('/', authenticateToken, createSkill);
router.put('/:id', authenticateToken, updateSkill);
router.delete('/:id', authenticateToken, deleteSkill);

export default router;
