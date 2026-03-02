const Sidebar = ({ activeNav, setActiveNav }) => {
  return (
    <div className="w-60 bg-gray-800 text-white p-4">
      <button onClick={() => setActiveNav('records')}>All Records</button>
      <br />
      <button onClick={() => setActiveNav('mysql')}>MySQL</button>
      <br />
      <button onClick={() => setActiveNav('mongo')}>MongoDB</button>
    </div>
  );
};

export default Sidebar;
