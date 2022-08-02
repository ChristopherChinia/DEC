import React from 'react'
import './index.css'
import SideBar from './components/SideBar'
import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
    <SideBar/>
    </Router>
  )
}

export default App