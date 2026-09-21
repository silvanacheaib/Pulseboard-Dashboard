import './Sidebar.css';

function Sidebar({ active }) {
  const items = ['Dashboard', 'Data Table', 'Reports', 'Team', 'Settings'];

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <span className="logo-dot"></span>
        <span>Pulseboard</span>
      </div>

      <nav className="sidebar-nav">
        {items.map((item) => (
          <div
            key={item}
            className={item === active ? 'nav-item active' : 'nav-item'}
          >
            {item}
          </div>
        ))}
      </nav>

      <div className="sidebar-user">
        <div className="avatar"></div>
        <div className="user-info">
          <strong>Silvana Cheaib</strong>
          <span>Product Owner</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;