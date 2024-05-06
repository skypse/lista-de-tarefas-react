import React from 'react'
import ReactDOM from 'react-dom/client'
import ListaDeTarefas from './components/ListaDeTarefas/ListaDeTarefas.jsx'
import './App.css' // utilizando para herdar alguns parametros de estilização
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ListaDeTarefas />
  </React.StrictMode>,
)
