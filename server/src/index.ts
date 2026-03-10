import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';

import authRoutes from './routes/auth';
import projectRoutes from './routes/projects';
import skillRoutes from './routes/skills';
import testimonialRoutes from './routes/testimonials';
import messageRoutes from './routes/messages';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/skills', skillRoutes);
app.use('/api/testimonials', testimonialRoutes);
app.use('/api/messages', messageRoutes);

// catch-all
app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

// automatic admin seed: if no user exists, create one from env vars
async function ensureAdmin() {
  const email = process.env.ADMIN_EMAIL;
  const pass = process.env.ADMIN_PASSWORD;
  if (!email || !pass) return;
  const existing = await prisma.user.findUnique({ where: { email } });
  if (!existing) {
    const hash = await import('bcrypt').then(b => b.hash(pass, 10));
    await prisma.user.create({ data: { email, password: hash } });
    console.log('Admin user seeded:', email);
  }
}

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
  ensureAdmin().catch(e => console.error('seeding admin failed', e));
});
