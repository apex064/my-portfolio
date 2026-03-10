import { useEffect, useState } from 'react';
import api from './api';
import { Project } from '../types';
import { ProjectList } from './ProjectList';
import { ProjectForm } from './ProjectForm';

export function Dashboard() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [editing, setEditing] = useState<Project | null>(null);

  // token header is automatically attached by api interceptor

  const fetchProjects = async () => {
    const res = await api.get('/api/projects');
    setProjects(res.data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const startEdit = (p: Project) => setEditing(p);
  const clearEdit = () => setEditing(null);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>

      {/* navigation can be extended to manage other resources */}
      <nav className="mb-6 space-x-4">
        <button className="px-3 py-1 bg-gray-700 rounded">Projects</button>
        <button className="px-3 py-1 bg-gray-700 rounded">Skills</button>
        <button className="px-3 py-1 bg-gray-700 rounded">Testimonials</button>
        <button className="px-3 py-1 bg-gray-700 rounded">Messages</button>
      </nav>

      <section>
        <ProjectForm
          onSaved={fetchProjects}
          editing={editing}
          onCancel={clearEdit}
        />
        <ProjectList
          projects={projects}
          onEdit={startEdit}
          onDeleted={fetchProjects}
        />
      </section>

      {/* further CRUD components for skills/testimonials/messages could go here */}
    </div>
  );
}
