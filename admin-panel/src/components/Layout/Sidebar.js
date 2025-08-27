import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: 'bi-speedometer2',
      path: '/dashboard'
    },
    {
      id: 'production',
      label: 'Üretim Planlama',
      icon: 'bi-gear-fill',
      path: '/production'
    }
  ];

  const handleMenuClick = (path) => {
    navigate(path);
    // Mobile'da menüye tıklayınca sidebar'ı kapat
    if (window.innerWidth < 992) {
      toggleSidebar();
    }
  };

  const isActive = (path) => location.pathname === path;

  // Mobile detection
  const isMobile = window.innerWidth < 992;

  return (
    <>
      {/* Overlay for mobile */}
      {isMobile && isOpen && (
        <div
          className={`sidebar-overlay ${isOpen ? 'show' : ''}`}
          onClick={toggleSidebar}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1035
          }}
        />
      )}

      {/* Sidebar */}
      <div
        className={`sidebar ${isOpen ? 'show' : ''}`}
        style={{
          zIndex: isMobile ? 1040 : 1020,
          position: 'fixed',
          top: 0,
          left: isOpen ? 0 : -280,
          width: 280,
          height: '100vh',
          background: 'white',
          boxShadow: '2px 0 10px rgba(0, 0, 0, 0.1)',
          transition: 'left 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          overflowY: 'auto'
        }}
      >
        {/* Sidebar Header */}
        <div className="sidebar-header">
          <div className="d-flex align-items-center">
            <div className="logo-icon">
              <i className="bi bi-calendar-event-fill"></i>
            </div>
            <h4 className="logo-text mb-0 ms-3">acara</h4>
          </div>
          {/* Close button - sadece mobile'da göster */}
          {isMobile && (
            <button
              className="btn btn-link text-muted ms-auto p-0"
              onClick={toggleSidebar}
            >
              <i className="bi bi-x-lg fs-5"></i>
            </button>
          )}
        </div>

        {/* Sidebar Content */}
        <div className="sidebar-content">
          {/* Main Navigation */}
          <nav className="sidebar-nav">
            <div className="nav-section">
              <div className="nav-section-title">
                <i className="bi bi-house-door me-2"></i>
                Ana Menü
              </div>
              {menuItems.map(item => (
                <button
                  key={item.id}
                  className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
                  onClick={() => handleMenuClick(item.path)}
                  type="button"
                >
                  <i className={`bi ${item.icon} me-3`}></i>
                  <span className="nav-text">{item.label}</span>
                  {isActive(item.path) && (
                    <div className="nav-indicator"></div>
                  )}
                </button>
              ))}
            </div>
          </nav>

          {/* Additional Menu Sections */}
          <div className="sidebar-footer-menus">

            <div className="menu-section">
              <div className="menu-section-header">
                <i className="bi bi-bar-chart me-2"></i>
                <span>Raporlar</span>
              </div>
              <div className="menu-items">
                <button className="menu-item" type="button">
                  <i className="bi bi-graph-up me-2"></i>
                  <span>Satış Raporu</span>
                </button>
                <button className="menu-item" type="button">
                  <i className="bi bi-pie-chart me-2"></i>
                  <span>Analitik</span>
                </button>
              </div>
            </div>

            <div className="menu-section">
              <div className="menu-section-header">
                <i className="bi bi-gear me-2"></i>
                <span>Sistem</span>
              </div>
              <div className="menu-items">
                <button className="menu-item" type="button">
                  <i className="bi bi-people me-2"></i>
                  <span>Kullanıcılar</span>
                </button>
                <button className="menu-item" type="button">
                  <i className="bi bi-shield-check me-2"></i>
                  <span>Güvenlik</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;