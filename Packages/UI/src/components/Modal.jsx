import { useEffect, useState } from 'react';

const Modal = ({ user, onSave, onClose }) => {
  const [form, setForm] = useState({
    id: user?.id,
    name: user?.name || '',
    email: user?.email || '',
    role: user?.role || 'Engineer',
    status: user?.status || 'active',
    db: user?.db || 'mysql',
    joined: user?.joined || new Date().toISOString().slice(0, 10),
  });

  useEffect(() => {
    if (user) {
      setForm({
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        status: user.status,
        db: user.db,
        joined: user.joined,
      });
    }
  }, [user]);

  const update = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-[420px] rounded-xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">
            {user ? 'Edit Record' : 'New Record'}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 text-xl"
          >
            ×
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">
              Name
            </label>
            <input
              value={form.name}
              onChange={(e) => update('name', e.target.value)}
              className="w-full border rounded-lg px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">
              Email
            </label>
            <input
              value={form.email}
              onChange={(e) => update('email', e.target.value)}
              className="w-full border rounded-lg px-3 py-2 text-sm"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">
                Role
              </label>
              <input
                value={form.role}
                onChange={(e) => update('role', e.target.value)}
                className="w-full border rounded-lg px-3 py-2 text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">
                Status
              </label>
              <select
                value={form.status}
                onChange={(e) => update('status', e.target.value)}
                className="w-full border rounded-lg px-3 py-2 text-sm"
              >
                <option value="active">active</option>
                <option value="inactive">inactive</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">
                Database
              </label>
              <select
                value={form.db}
                onChange={(e) => update('db', e.target.value)}
                className="w-full border rounded-lg px-3 py-2 text-sm"
              >
                <option value="mysql">mysql</option>
                <option value="mongo">mongo</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">
                Joined
              </label>
              <input
                type="date"
                value={form.joined}
                onChange={(e) => update('joined', e.target.value)}
                className="w-full border rounded-lg px-3 py-2 text-sm"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-sm"
          >
            Cancel
          </button>
          <button
            onClick={() => onSave(form)}
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 text-sm font-semibold"
          >
            {user ? 'Save' : 'Create'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
