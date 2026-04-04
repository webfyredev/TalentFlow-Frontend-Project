import React, { useState } from 'react';
import { User, Hash, BookOpen, CheckCircle, ArrowLeft, Award } from 'lucide-react';
// import InputField from '../components/InputField.js';
// import Button from '../components/Button.js';
// import Logo from '../components/Logo.js';
// import PageTransition from '../components/PageTransition.js';
import { useNavigate } from 'react-router-dom';

const TutorVerificationPage = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    referenceNumber: '',
    course: ''
  });
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    setIsTransitioning(true);
    setTimeout(() => {
      navigate(path);
    }, 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to tutor dashboard after verification
    handleNavigate('/tutor-dashboard');
  };

  const courses = [
    'Web Development Fundamentals',
    'Data Science Essentials',
    'UI/UX Design Principles',
    'Mobile App Development',
    'Cloud Computing Basics',
    'Cybersecurity Fundamentals'
  ];

  return (
    <>
      {/* <PageTransition isActive={isTransitioning} text="Verifying instructor credentials..." /> */}
      <div className={`min-h-screen flex flex-col items-center justify-center bg-white p-6 ${isTransitioning ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
        <div className="flex justify-center mb-6">
          <Logo size="sm" />
        </div>

        <h1 className="text-2xl font-bold text-center text-gray-900 mb-2">
          Tutor Verification
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Verify your credentials to access your instructor dashboard
        </p>

        <div className="w-full max-w-md">
          {/* Info Banner */}
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-6">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium text-gray-900 text-sm">Instructor Verification</p>
                <p className="text-gray-600 text-sm mt-1">
                  Please enter your full name and tutor reference number to verify your instructor account.
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <input
                id="fullName"
                type="text"
                label="Full Name"
                placeholder="Mr Williams David"
                icon={User}
                required
                value={formData.fullName}
                onChange={(e) => setFormData({...formData, fullName: e.target.value})}
              />
              <p className="text-xs text-gray-500 mt-1">Enter your name as it appears in your instructor profile</p>
            </div>

            <div>
              <input
                id="referenceNumber"
                type="text"
                label="Tutor Reference Number"
                placeholder="TRN-2024-XXXXX"
                icon={Hash}
                required
                value={formData.referenceNumber}
                onChange={(e) => setFormData({...formData, referenceNumber: e.target.value})}
              />
              <p className="text-xs text-gray-500 mt-1">This was provided when your instructor application was approved</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Your Course
              </label>
              <div className="relative">
                <BookOpen className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select
                  id="course"
                  value={formData.course}
                  onChange={(e) => setFormData({...formData, course: e.target.value})}
                  className="w-full pl-12 pr-4 py-3.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-all appearance-none bg-white text-gray-600"
                  required
                >
                  <option value="" disabled>Choose a course to teach</option>
                  {courses.map((course) => (
                    <option key={course} value={course}>{course}</option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-1">You can teach additional courses after verification</p>
            </div>

            {/* Help Section */}
            <div className="bg-gray-50 rounded-xl p-4 mt-6">
              <p className="font-medium text-gray-900 text-sm mb-3">Where to find your tutor reference number:</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                  Check your instructor approval email
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                  Look for the subject line "TalentFlow Instructor Approved"
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                  Format: TRN-2024-XXXXX (Tutor Reference Number)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                  Also available in your instructor account settings
                </li>
              </ul>
            </div>

            <button type="submit" variant="primary" fullWidth>
              <CheckCircle className="w-5 h-5" />
              Verify & Continue
            </button>

            <p className="text-center text-sm text-gray-600">
              Need help with verification?{' '}
              <button type="button" className="text-primary font-medium hover:underline">
                Contact Instructor Support
              </button>
            </p>
          </form>
        </div>

        <button
          type="button"
          onClick={() => handleNavigate('/choose-role')}
          className="mt-8 flex items-center justify-center gap-2 text-gray-600 hover:text-primary transition-colors text-sm"
        >
          <ArrowLeft size={18} />
          Back to Role Selection
        </button>
      </div>
    </>
  );
};

export default TutorVerificationPage;
