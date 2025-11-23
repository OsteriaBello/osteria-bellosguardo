import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { LanguageProvider } from './contexts/LanguageContext'
import { SanityDataProvider } from './contexts/SanityDataContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider>
      <SanityDataProvider>
        <App />
      </SanityDataProvider>
    </LanguageProvider>
  </StrictMode>,
)