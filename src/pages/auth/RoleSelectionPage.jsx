import React, { useState } from 'react';
import { BookOpen, Users, ArrowRight } from 'lucide-react';
// import Logo from '../components/Logo.js';
// import PageTransition from '../components/PageTransition.js';
import { useNavigate } from 'react-router-dom';

const RoleSelectionPage = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    setIsTransitioning(true);
    setTimeout(() => {
      navigate(path);
    }, 2500);
  };

  return (
    <>
      {/* <PageTransition isActive={isTransitioning} text="Setting up your experience..." /> */}
      <div className={`min-h-screen flex flex-col items-center justify-center bg-white p-6 ${isTransitioning ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
        <div className="flex justify-center mb-8">
          <Logo size="sm" />
        </div>

        <h1 className="text-3xl font-bold text-center text-gray-900 mb-2">
          Choose Your Role
        </h1>
        <p className="text-center text-gray-600 mb-12">
          How would you like to use TalentFlow?
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
          {/* Learner Card */}
          <button
            type="button"
            onClick={() => handleNavigate('/verify-learner')}
            className="flex flex-col items-start p-8 rounded-2xl border-2 border-gray-100 hover:border-primary hover:shadow-xl transition-all duration-300 text-left bg-white group"
          >
            <div className="w-14 h-14 rounded-xl bg-mint/30 flex items-center justify-center mb-6 group-hover:bg-mint/50 transition-colors">
              <BookOpen className="w-7 h-7 text-primary" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Learner</h2>
            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              Join courses, collaborate with peers, and build practical solutions
            </p>
            <span className="text-primary font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
              Continue as Learner <ArrowRight className="w-4 h-4" />
            </span>
          </button>

          {/* Tutor Card */}
          <button
            type="button"
            onClick={() => handleNavigate('/verify-tutor')}
            className="flex flex-col items-start p-8 rounded-2xl border-2 border-gray-100 hover:border-primary hover:shadow-xl transition-all duration-300 text-left bg-white group"
          >
            <div className="w-14 h-14 rounded-xl bg-orange-100 flex items-center justify-center mb-6 group-hover:bg-orange-200 transition-colors">
              <Users className="w-7 h-7 text-orange-600" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Tutor</h2>
            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              Create courses, mentor learners, and share your expertise
            </p>
            <span className="text-primary font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
              Continue as Tutor <ArrowRight className="w-4 h-4" />
            </span>
          </button>
        </div>

        <p className="text-center text-xs text-gray-500 mt-12">
          You can switch roles anytime from your account settings
        </p>
      </div>
    </>
  );
};

export default RoleSelectionPage;
