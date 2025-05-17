import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/styles.css';
import { UserProvider } from './context/user.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
    <App/>
    </UserProvider>
  </StrictMode>,
)
