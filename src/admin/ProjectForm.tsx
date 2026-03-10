import { useState, useEffect } from 'react';
import api from './api';
import { Project } from '../types';

interface Props {
  editing: Project | null;
  onSaved: () => void;
  onCancel: () => void;
  headers?: Record<string, string>;
}

export function ProjectForm({ editing, onSaved, onCancel, headers }: Props) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [image, setImage] = useState<File | null>(null);

  useEffect(() => {
    if (editing) {
      setTitle(editing.title);
      setDescription(editing.description);
      setLink(editing.link || '');
      setImage(null);
    } else {
      setTitle('');
      setDescription('');
      setLink('');
      setImage(null);
    }
  }, [editing]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    let imageUrl = editing?.image;

    if (image) {
      const form = new FormData();
      form.append('image', image);
      const res = await api.post('/api/projects/upload', form, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      imageUrl = res.data.path;
    }

    const payload = { title, description, link, image: imageUrl };
    if (editing) {
      await api.put(`/api/projects/${editing.id}`, payload);
    } else {
      await api.post('/api/projects', payload);
    }

    onSaved();
  };

  return (
    <form onSubmit={submit} className="space-y-3 bg-gray-800 p-4 rounded">
      <h2 className="text-lg font-medium text-white">
        {editing ? 'Edit Project' : 'New Project'}
      </h2>
      <input
        className="w-full p-2 rounded bg-gray-700"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        className="w-full p-2 rounded bg-gray-700"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        className="w-full p-2 rounded bg-gray-700"
        placeholder="Link"
        value={link}
        onChange={(e) => setLink(e.target.value)}
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files?.[0] || null)}
      />
      <div className="space-x-2">
        <button type="submit" className="px-4 py-2 bg-green-600 rounded">
          Save
        </button>
        {editing && (
          <button type="button" onClick={onCancel} className="px-4 py-2 bg-gray-500 rounded">
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
