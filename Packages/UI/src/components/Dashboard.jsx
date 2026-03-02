import useRecords from '../hooks/useRecords';
import Sidebar from './SideBar';
import RecordsTable from './RecordsTable';
import DeleteConfirm from './DeleteConfirm';
import Modal from './Modal';
import Toast from './Toast';

const Dashboard = () => {
  const {
    records,
    activeNav,
    setActiveNav,
    pageTitle,
    filtered,
    modal,
    setModal,
    confirmDelete,
    setConfirm,
    handleDelete,
    handleSave,
    toast,
  } = useRecords();

  return (
    <div className="flex h-screen bg-brand-bg text-white-200 font-sans">
      <Sidebar activeNav={activeNav} setActiveNav={setActiveNav} />

      <div className="flex-1 p-6">
        <div className="flex-1 p-6 space-y-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-100">{pageTitle}</h1>

            <button
              onClick={() => setModal('create')}
              className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition"
            >
              + New Record
            </button>
          </div>

          <p className="text-gray-500 text-sm">
            Showing {filtered.length} of {records.length} records
          </p>

          <RecordsTable
            records={filtered}
            onEdit={(user) => setModal(user)}
            onDelete={(user) => setConfirm(user)}
          />
        </div>
      </div>
      {modal && (
        <Modal
          user={modal === 'create' ? null : modal}
          onSave={handleSave}
          onClose={() => setModal(null)}
        />
      )}

      {confirmDelete && (
        <DeleteConfirm
          user={confirmDelete}
          onConfirm={handleDelete}
          onClose={() => setConfirm(null)}
        />
      )}
      {toast && <Toast msg={toast.msg} type={toast.type} />}
    </div>
  );
};

export default Dashboard;
