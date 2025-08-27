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
    if (window.innerWidth < 992) {
      toggleSidebar();
    }
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Overlay for mobile */}
      <div 
        className={`sidebar-overlay ${isOpen ? 'show' : ''}`} 
        onClick={toggleSidebar}
      ></div>
      
      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? 'show' : ''}`}>
        {/* Sidebar Header */}
        <div className="sidebar-header">
          <div className="d-flex align-items-center">
            <div className="logo-icon">
              <i className="bi bi-calendar-event-fill"></i>
            </div>
            <h4 className="logo-text mb-0 ms-3">acara</h4>
          </div>
          <button 
            className="btn btn-link text-muted d-lg-none ms-auto p-0"
            onClick={toggleSidebar}
          >
            <i className="bi bi-x-lg fs-5"></i>
          </button>
        </div>
        
        {/* Sidebar Content */}
        <div className="sidebar-content">
          {/* New Event Button */}
          <div className="new-event-btn-container mb-4">
            <button className="btn btn-danger w-100 d-flex align-items-center justify-content-center">
              <i className="bi bi-plus-lg me-2"></i>
              New Event
            </button>
          </div>
          
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
                <i className="bi bi-app-indicator me-2"></i>
                <span>Uygulamalar</span>
              </div>
              <div className="menu-items">
                <button className="menu-item" type="button">
                  <i className="bi bi-calendar3 me-2"></i>
                  <span>Takvim</span>
                </button>
                <button className="menu-item" type="button">
                  <i className="bi bi-envelope me-2"></i>
                  <span>Mesajlar</span>
                </button>
              </div>
            </div>
            
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

        {/* Sidebar Footer */}
        <div className="sidebar-footer">
          <div className="upgrade-card">
            <div className="upgrade-icon">
              <i className="bi bi-star-fill"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;