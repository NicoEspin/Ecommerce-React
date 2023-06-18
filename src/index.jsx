
import React from 'react'
//react-router-dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import ReactDOM from 'react-dom/client'
import { Nav } from './components/Nav/Nav.jsx'

import './index.css'
//Pages
import { HomePage } from './pages/HomePage.jsx'
import { ContactPage } from './pages/ContactPage.jsx'
import { AboutPage } from './pages/AboutPage.jsx'
import { ItemDetailContainer } from './pages/ItemDetailContainer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Nav />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/contact' element={<ContactPage />} />
      <Route path='/item/:id' element={<ItemDetailContainer />} />
    </Routes>
  </Router>
)
