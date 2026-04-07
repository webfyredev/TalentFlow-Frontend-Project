import { useState } from 'react'
import Admin_Dashboard from './pages/Admin/dashboard'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Staff_Courses from './pages/Tutor/createCourse'
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
import QuizPage from './pages/leaners/quixPage'
import QuizSuccess from './pages/leaners/quizSuccess'
import QuizReview from './pages/leaners/quizReview'
import Tutor_Dashboard from './pages/Tutor/dashboard'
import CreateCourse from './pages/Tutor/createCourse'
import Submissions from './pages/Tutor/submissions'
import Interns from './pages/Tutor/interns'
import TutorProfileSettings from './pages/Tutor/settings'

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
          <Route path='/admin-dashboard' element={<Admin_Dashboard />}></Route>
          
          {/* Tutor Routes  */}
          <Route path='/tutor-dashboard' element={<Tutor_Dashboard />}></Route>
          <Route path='/create-course' element={<CreateCourse />}></Route>
          <Route path="/submissions" element={<Submissions />}></Route>
          <Route path='/interns' element={<Interns />}></Route>
          <Route path='/tutor-profile' element={<TutorProfileSettings />}></Route>
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
          <Route path='/student-course/:id/module/:moduleId/quiz/:lessonId' element={<QuizPage />}></Route>
          <Route path='/quiz-result/:id/:moduleId/quiz/:lessonId' element={<QuizSuccess />}></Route>
          <Route path='/quiz-result/:id/:moduleId/quiz/quiz-review/:lessonId' element={<QuizReview />}></Route>
        </Routes>
      </Router>

  )
}

export default App
