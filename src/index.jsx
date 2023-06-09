import React from 'react'
import ReactDOM from 'react-dom/client'
import {Nav} from './components/Nav/Nav.jsx'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav/>
    <ItemListContainer
    greetings='Hello World!'/>
  </React.StrictMode>,
)
