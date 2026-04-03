import { useState } from 'react'
import Admin_Dashboard from './pages/Tutor/dashboard'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Staff_Courses from './pages/Tutor/course'
import Learners_Dashboard from './pages/leaners/dashboard'
import Courses from './pages/leaners/courses'

function App() {

  return (
      <Router>
        <Routes>
          <Route path='/admin_dashboard' element={<Admin_Dashboard />}></Route>
          <Route path='/learners_dashboard' element={<Learners_Dashboard />}></Route>
          <Route path='/staff-courses' element={<Staff_Courses />}></Route>
          <Route path='/student-course' element={<Courses />}></Route>
        </Routes>
      </Router>

  )
}

export default App
