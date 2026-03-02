const RecordsTable = ({ records, onEdit, onDelete }) => {
  return (
    <div className="bg-brand-surface border border-brand-border rounded-xl overflow-hidden">
      <table className="w-full text-sm text-left">
        <thead className="bg-brand-border text-brand-muted uppercase text-xs tracking-wider">
          <tr className="hover:bg-brand-border/40 transition">
            <th className="px-6 py-3">Name</th>
            <th className="px-6 py-3">Email</th>
            <th className="px-6 py-3">Role</th>
            <th className="px-6 py-3">Database</th>
            <th className="px-6 py-3">Status</th>
            <th className="px-6 py-3 text-right">Actions</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {records.map((user) => (
            <tr key={user.id} className="hover:bg-gray-50 transition">
              <td className="px-6 py-4 font-medium text-gray-900">
                {user.name}
              </td>

              <td className="px-6 py-4 text-gray-600">{user.email}</td>

              <td className="px-6 py-4 text-gray-600">{user.role}</td>

              <td className="px-6 py-4">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    user.db === 'mysql'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-green-100 text-green-700'
                  }`}
                >
                  {user.db}
                </span>
              </td>
              <td className="px-6 py-4 text-gray-600">{user.status}</td>

              <td className="px-6 py-4 text-right space-x-2">
                <button
                  onClick={() => onEdit(user)}
                  className="px-3 py-1 text-xs font-semibold bg-gray-200 rounded-md hover:bg-gray-300 transition"
                >
                  Edit
                </button>

                <button
                  onClick={() => onDelete(user)}
                  className="px-3 py-1 text-xs font-semibold bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecordsTable;
