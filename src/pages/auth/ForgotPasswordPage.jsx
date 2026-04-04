import React, { useState } from 'react';
import { Mail, ArrowLeft } from 'lucide-react';
// import InputField from '../components/InputField.js';
// import Button from '../components/Button.js';
// import Logo from '../components/Logo.js';
// import PageTransition from '../components/PageTransition.js';
// import AuthLayout from '../components/AuthLayout.js';
import { useNavigate } from 'react-router-dom';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    setIsTransitioning(true);
    setTimeout(() => {
      navigate(path);
    }, 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/check-email', { state: { email } });
  };

  return (
    <>
      {/* <PageTransition 
        isActive={isTransitioning} 
        text="One moment..." 
      /> */}
      <div className={`animate-fadeIn ${isTransitioning ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
        {/* <AuthLayout
          isLogin={true}
          illustrationSrc="/img/tf-login.png"
          illustrationAlt="Password security"
          tagline="Secure your account"
        > */}
          <div className="flex justify-center mb-6">
            <Logo size="sm" />
          </div>
          
          <h1 className="text-2xl font-bold text-center text-gray-900 mb-2">
            Forgot Password?
          </h1>
          <p className="text-center text-gray-600 mb-8">
            No worries, we'll send you reset instructions
          </p>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8">
            <input
              id="email"
              type="email"
              label="Email Address"
              placeholder="Your email@example.com"
              icon={Mail}
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button type="submit" variant="primary" fullWidth>
              Send Reset Link
            </button>

            <button
              type="button"
              onClick={() => handleNavigate('/login')}
              className="w-full flex items-center justify-center gap-2 mt-6 text-gray-600 hover:text-primary transition-colors"
            >
              <ArrowLeft size={18} />
              Back to Login
            </button>
          </form>
        {/* </AuthLayout> */}
      </div>
    </>
  );
};

export default ForgotPasswordPage;
