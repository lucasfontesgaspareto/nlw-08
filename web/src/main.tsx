import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './global.css'

import App from './App'
import { InboxPage } from './pages/InboxPage'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/inbox" element={<InboxPage/>} />
      </Routes>
    </ BrowserRouter>
  </React.StrictMode>
)
