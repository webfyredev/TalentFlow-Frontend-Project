import React, { useState } from 'react';
import { Mail, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
// import InputField from '../components/InputField.js';
// import Button from '../components/Button.js';
// import Logo from '../components/Logo.js';
// import PageTransition from '../components/PageTransition.js';
// import AuthLayout from '../components/AuthLayout.js';
import logoImg from '../../images/logo.png'

const LoginPage = () => {
  const navigate = useNavigate();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleNavigate = (href) => {
    setIsTransitioning(true);
    setTimeout(() => {
      window.location.href = href;
    }, 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // On successful login, navigate to role selection
    handleNavigate('/choose-role');
  };

  return (
    <>
      {/* <PageTransition 
        isActive={isTransitioning} 
        text="Joining TalentFlow..." 
      /> */}
      <div className={`animate-fadeIn ${isTransitioning ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
        {/* <AuthLayout
        isLogin={true}
        illustrationSrc="/img/tf-login.png"
        illustrationAlt="Person working with technology"
        tagline="Where Learning Meets Real-World Impact"
      > */}
          <img src={logoImg} alt="" />
        
        <h1 className="text-2xl font-bold text-center text-gray-900 leading-none m-0">
          Welcome to TalentFlow
        </h1>
        <p className="text-center text-gray-600 mb-6 mt-1 leading-snug">
          Collaborate, learn, and build practical solutions
        </p>
        
        <div className="
          bg-white rounded-2xl p-4 sm:p-6 md:p-7
          shadow-lg border border-gray-100
          transition-all duration-300
          hover:shadow-xl hover:-translate-y-1
        ">
          <h2 className="text-xl font-bold text-gray-900 mb-5">Log In</h2>
          
          <form onSubmit={handleSubmit}>
            <input
              id="email"
              type="email"
              label="Email Address"
              placeholder="Your email@example.com"
              icon={Mail}
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              title="Please enter a valid email address"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
            
            <input
              id="password"
              type="password"
              label="Password"
              placeholder="Enter your password"
              icon={Lock}
              required
              minLength={8}
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$"
              title="Password must be at least 8 characters with uppercase, lowercase, and number"
              showPasswordToggle
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
            />
            
            <button 
              type="button"
              onClick={() => handleNavigate('/forgot-password')}
              className="w-full text-right text-sm text-primary
                hover:text-primary-dark hover:underline
                transition-colors -mt-2 mb-4"
            >
              Forgot Password?
            </button>
            
            <button type="submit" variant="primary" fullWidth>
              Log In
            </button>
          </form>
          
          <div className="flex items-center my-5 text-gray-400 text-sm">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="px-4">Or continue with</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>
          
          <button variant="secondary" fullWidth>
            <img src="/img/google-icon.svg" alt="Google" className="w-5 h-5" />
            Sign in with Google
          </button>
          
          <p className="text-center text-sm text-gray-600 mt-4">
            Don't have an account?{' '}
            <button 
              onClick={() => handleNavigate('/signup')}
              className="text-primary font-medium hover:text-primary-dark hover:underline"
            >
              Sign Up
            </button>
          </p>
        </div>
        
        <p className="text-center text-sm text-gray-500 mt-5">
          By logging in, you agree to our{' '}
          <button className="text-gray-600 hover:underline">Terms of Service</button>
          {' '}and{' '}
          <button className="text-gray-600 hover:underline">Privacy Policy</button>
        </p>
      {/* </AuthLayout> */}
    </div>
    </>
  );
};

export default LoginPage;
