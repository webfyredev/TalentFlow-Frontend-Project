import { useState } from 'react'
import Learners_Dashboard from './pages/leaners/dashboard'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Courses from './pages/leaners/course'

function App() {

  return (
      <Router>
        <Routes>
          <Route path='/learner_dashboard' element={<Learners_Dashboard />}></Route>
          <Route path='/courses' element={<Courses />}></Route>
        </Routes>
      </Router>

  )
}

export default App
