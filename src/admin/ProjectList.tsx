import api from './api';
import { Project } from '../types';

interface Props {
  projects: Project[];
  onEdit: (p: Project) => void;
  onDeleted: () => void;
  headers?: Record<string, string>;
}

export function ProjectList({ projects, onEdit, onDeleted, headers }: Props) {
  const deleteProject = async (id: number) => {
    await api.delete(`/api/projects/${id}`);
    onDeleted();
  };

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-2">Projects</h2>
      <ul className="space-y-2">
        {projects.map((p) => (
          <li key={p.id} className="flex justify-between items-center bg-gray-800 p-2 rounded">
            <span>{p.title}</span>
            <div className="space-x-2">
              <button
                className="text-blue-400"
                onClick={() => onEdit(p)}
              >
                Edit
              </button>
              <button
                className="text-red-400"
                onClick={() => deleteProject(p.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
