import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/Page/HomePage.jsx';
import Register from './components/Account/Register.jsx';

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
        <Route index element={<HomePage />} />
        <Route path="Register" element={<Register />} />
      </Route>
    </Routes>
  </BrowserRouter>
)