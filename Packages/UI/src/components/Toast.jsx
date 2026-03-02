const Toast = ({ msg, type }) => {
  const colors = {
    create: 'bg-green-500',
    edit: 'bg-blue-500',
    delete: 'bg-red-500',
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div
        className={`${colors[type] || 'bg-gray-800'} text-white px-4 py-3 rounded-lg shadow-lg text-sm font-medium animate-fade-in`}
      >
        {msg}
      </div>
    </div>
  );
};

export default Toast;
