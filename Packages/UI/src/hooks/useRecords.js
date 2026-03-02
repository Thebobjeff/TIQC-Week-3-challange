import { useState } from 'react';
import { MOCK_USERS } from '../data/mockUsers';

export default function useRecords() {
  const [records, setRecords] = useState(MOCK_USERS);
  const [activeNav, setActiveNav] = useState('records');
  const [modal, setModal] = useState(null);
  const [confirmDelete, setConfirm] = useState(null);
  const [search, setSearch] = useState('');
  const [toast, setToast] = useState(null);

  // Filtering
  const dbFilter =
    activeNav === 'mysql' ? 'mysql' : activeNav === 'mongo' ? 'mongo' : null;

  const filtered = records.filter((r) => {
    const matchDb = !dbFilter || r.db === dbFilter;
    const matchSearch =
      !search ||
      r.name.toLowerCase().includes(search.toLowerCase()) ||
      r.email.toLowerCase().includes(search.toLowerCase()) ||
      r.role.toLowerCase().includes(search.toLowerCase());

    return matchDb && matchSearch;
  });

  // Toast helper
  const showToast = (msg, type) => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 2800);
  };

  // CRUD
  const handleSave = (form) => {
    if (modal === 'create') {
      setRecords((r) => [...r, { ...form, id: Date.now() }]);
      showToast('Record created', 'create');
    } else {
      setRecords((r) => r.map((x) => (x.id === form.id ? form : x)));
      showToast('Record updated', 'edit');
    }
    setModal(null);
  };

  const handleDelete = () => {
    setRecords((r) => r.filter((x) => x.id !== confirmDelete.id));
    showToast('Record deleted', 'delete');
    setConfirm(null);
  };

  const pageTitle = {
    records: 'All Records',
    mysql: 'MySQL Records',
    mongo: 'MongoDB Records',
    settings: 'Settings',
  }[activeNav];

  return {
    records,
    activeNav,
    setActiveNav,
    modal,
    setModal,
    confirmDelete,
    setConfirm,
    search,
    setSearch,
    toast,
    filtered,
    handleSave,
    handleDelete,
    pageTitle,
  };
}
