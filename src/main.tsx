import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import Router from './Router.tsx';
import './index.css';
import { LanguageProvider } from './contexts/LanguageContext';
import { AuthProvider } from './contexts/AuthContext';

function ScrollObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    });

    document.querySelectorAll('.reveal').forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}

function Root() {
  return (
    <StrictMode>
      <AuthProvider>
        <LanguageProvider>
          <ScrollObserver />
          <Router />
        </LanguageProvider>
      </AuthProvider>
    </StrictMode>
  );
}

createRoot(document.getElementById('root')!).render(<Root />);