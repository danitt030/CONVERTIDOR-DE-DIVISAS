import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Navbar } from '../components/navbar/Navbar'
import { Convertidor } from '../components/converter/Convertidor'


export const Home = () => {
  return (
    <Router>
        <main>
            <Navbar/>
            <Convertidor/>
        </main>
    </Router>
  )
}
