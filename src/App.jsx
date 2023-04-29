import { Routes, Route } from 'react-router-dom'
import React from 'react'
import Navbar from './components/Navbar'
import Profil from './components/Profil'
import Emploi from './components/Emploi'
import Reclamations from './components/Reclamations'
import Statistiques from './components/Statistiques'
import './App.css'

const App = () => {
  return (

    <Routes>
      <Route path="/" element={<Emploi />} />
      <Route path="/Profil" element={<Profil />} />
      <Route path="/Emploi" element={<Emploi />} />
      <Route path="/Reclamations" element={<Reclamations />} />
      <Route path="/Statistiques" element={<Statistiques />} />
    </Routes>
  )
}

export default App