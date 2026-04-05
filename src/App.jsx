import { useState } from 'react'
import Admin_Dashboard from './pages/Tutor/dashboard'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Staff_Courses from './pages/Tutor/course'
import Learners_Dashboard from './pages/leaners/dashboard'
import Courses from './pages/leaners/courses'
import CourseOverview from './pages/leaners/courseOverview'
import LoginPage from './pages/auth/loginPage'
import SignUpPage from './pages/auth/signupPage'
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage'
import CheckEmailPage from './pages/auth/CheckEmailPage'
import RoleSelectionPage from './pages/auth/roleSelectionPage'
import LearnerVerificationPage from './pages/auth/LearnerVerificationPage'
import TutorVerificationPage from './pages/auth/TutorVerificationPage'
import Assignments from './pages/leaners/assignments'
import Progress from './pages/leaners/progress'
import ProfileSettings from './pages/leaners/settings'
import AssignmentOverview from './pages/leaners/assignmentDetails'
import LearnerProfile from './pages/leaners/profile'
import Assessment from './pages/leaners/assessment'
import PageUp from './pages/leaners/pageUp'

function App() {

  return (
      <Router>
        <PageUp />
        <Routes>
          {/* Authentication Routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/check-email" element={<CheckEmailPage />} />
          <Route path="/choose-role" element={< RoleSelectionPage />} />
          <Route path="/verify-learner" element={<LearnerVerificationPage />} />
          <Route path="/verify-tutor" element={<TutorVerificationPage />} />
          {/* <Route path="/" element={<Navigate to="/signup" replace />} /> */}

          {/* Admin Routes  */}
          <Route path='/admin_dashboard' element={<Admin_Dashboard />}></Route>
          <Route path='/staff-courses' element={<Staff_Courses />}></Route>
          {/* Learners Routes  */}
          <Route path='/learners_dashboard' element={<Learners_Dashboard />}></Route>
          <Route path='/student-course' element={<Courses />}></Route>
          <Route path='student-course/:id' element={<CourseOverview />}></Route>
          <Route path='/assignment' element={<Assignments />}></Route>
          <Route path='/progress' element={<Progress />}></Route>
          <Route path='/profile-setting' element={<ProfileSettings />}></Route>
          <Route path='/assignment/:id' element={<AssignmentOverview />}></Route>
          <Route path='/user-profile' element={<LearnerProfile />}></Route>
          <Route path='/student-course/:id/module/:moduleId/student-assessment/:lessonId' element={<Assessment />}></Route>
        </Routes>
      </Router>

  )
}

export default App
