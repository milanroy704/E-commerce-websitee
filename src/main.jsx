import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ShopcontextProvider from './context/Shopcontext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ShopcontextProvider>
      <App />
    </ShopcontextProvider>

  </BrowserRouter>,
)
