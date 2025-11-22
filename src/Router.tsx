import React from 'react';
import App from './App';
import AdminPage from './pages/AdminPage';

const Router = () => {
  const path = window.location.pathname;

  if (path === '/admin') {
    return <AdminPage />;
  }

  return <App />;
};

export default Router;
