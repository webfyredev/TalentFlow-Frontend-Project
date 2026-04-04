import React from 'react';
import { Mail, ArrowLeft } from 'lucide-react';
// import Button from '../components/Button.js';
import { useLocation, useNavigate } from 'react-router-dom';

const CheckEmailPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { email } = location.state || { email: 'your email' };

  const handleTryAgain = () => {
    navigate('/forgot-password');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-6">
      <div className="w-full max-w-md">
        {/* Mail Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center">
            <Mail size={32} className="text-white" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-center text-gray-900 mb-2">
          Check Your Email
        </h1>
        <p className="text-center text-gray-600 mb-2">
          We've sent password reset instructions to
        </p>
        <p className="text-center text-primary font-medium mb-8">
          {email}
        </p>

        {/* Info Box */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
          <p className="text-center text-gray-600 mb-4">
            Click the link in the email to reset your password. The link will expire in 24 hours.
          </p>
          
          <p className="text-center text-gray-600">
            Didn't receive the email? Check your spam folder or{' '}
            <button
              onClick={handleTryAgain}
              className="text-primary hover:underline font-medium"
            >
              try again
            </button>
          </p>
        </div>

        {/* Back to Login */}
        <button
          variant="primary"
          fullWidth
          onClick={() => navigate('/login')}
        >
          <ArrowLeft size={18} className="mr-2" />
          Back to Login
        </button>
      </div>
    </div>
  );
};

export default CheckEmailPage;
