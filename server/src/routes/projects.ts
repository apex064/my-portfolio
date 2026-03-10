import { Router } from 'express';
import multer from 'multer';
import path from 'path';
import {
  listProjects,
  createProject,
  updateProject,
  deleteProject,
} from '../controllers/projectController';
import { authenticateToken } from '../middleware/auth';

const router = Router();
const upload = multer({ dest: path.join(__dirname, '../../uploads') });

// public listing
router.get('/', listProjects);

// protected endpoints
router.post('/', authenticateToken, createProject);
router.put('/:id', authenticateToken, updateProject);
router.delete('/:id', authenticateToken, deleteProject);

// image upload helper
router.post('/upload', authenticateToken, upload.single('image'), (req, res) => {
  if (!req.file) return res.status(400).json({ message: 'No file uploaded' });
  res.json({ path: `/uploads/${req.file.filename}` });
});

export default router;
