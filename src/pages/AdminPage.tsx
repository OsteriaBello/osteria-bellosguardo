import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import AdminLogin from '../components/admin/AdminLogin';
import AdminPanel from '../components/admin/AdminPanel';

const AdminPage = () => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-[#e3a048] border-r-transparent"></div>
      </div>
    );
  }

  return isAuthenticated ? <AdminPanel /> : <AdminLogin />;
};

export default AdminPage;
