import React, { useState } from 'react';
import { Mail, Lock, User, Check } from 'lucide-react';
// import InputField from '../components/InputField.js';
// import Button from '../components/Button.js';
// import PageTransition from '../components/PageTransition.js';
// import AuthLayout from '../components/AuthLayout.js';
import logoImg from '../../images/logo.png'

export default function SignUpPage(){

}
  // const [isTransitioning, setIsTransitioning] = useState(false);
  // const [formData, setFormData] = useState({
  //   fullname: '',
  //   email: '',
  //   password: '',
  //   confirmPassword: ''
  // });
  // const [errors, setErrors] = useState({});
  // const [passwordReqs, setPasswordReqs] = useState({
  //   length: false,
  //   upper: false,
  //   lower: false,
  //   number: false
  // });

  // const validatePassword = (value) => {
  //   const reqs = {
  //     length: value.length >= 8,
  //     upper: /[A-Z]/.test(value),
  //     lower: /[a-z]/.test(value),
  //     number: /\d/.test(value)
  //   };
  //   setPasswordReqs(reqs);
  //   return Object.values(reqs).every(Boolean);
  // };

  // const handleNavigate = (href) => {
  //   setIsTransitioning(true);
  //   setTimeout(() => {
  //     window.location.href = href;
  //   }, 2500);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const newErrors = {};
    
  //   if (!/^[a-zA-Z\s'-]+$/.test(formData.fullname)) {
  //     newErrors.fullname = 'Name can only contain letters, spaces, hyphens and apostrophes';
  //   }
    
  //   if (!validatePassword(formData.password)) {
  //     newErrors.password = 'Password does not meet all requirements';
  //   }
    
  //   if (formData.password !== formData.confirmPassword) {
  //     newErrors.confirmPassword = 'Passwords do not match';
  //   }
    
  //   setErrors(newErrors);
    
  //   if (Object.keys(newErrors).length === 0) {
  //     // Submit form - on success navigate to role selection
  //     handleNavigate('/choose-role');
  //   }
  // };

  // return (
    // <>
      {/* <div>
        <div className='border p-5'>
          <img src={logoImg} alt="" className='w-20 h-20'/>
          <h1 className="text-2xl font-bold text-center text-gray-900 leading-none m-0">
            Join TalentFlow
          </h1>
          <p className="text-center text-gray-600 mb-6 mt-1 leading-snug">
            Start your collaborative learning journey
          </p>
          
          <div className="
            bg-white rounded-2xl p-4 sm:p-6 md:p-7
            shadow-lg border border-gray-100
            transition-all duration-300
            focus-within:shadow-xl focus-within:border-primary-light
          ">
            <h2 className="text-xl font-bold text-gray-900 mb-5">Create Account</h2>
            
            <form onSubmit={handleSubmit}>
              <input
                id="fullname"
                placeholder="Love John"
                required
                minLength={2}
                maxLength={50}
                value={formData.fullname}
                onChange={(e) => setFormData({...formData, fullname: e.target.value})}
                error={errors.fullname}
              />
              
              <input
                id="email"
                type="email"
                label="Email Address"
                placeholder="Your email@example.com"
                required
                title="Please enter a valid email address"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
              
              <input
                id="password"
                type="password"
                label="Password"
                placeholder="Create a password"
                icon={Lock}
                required
                minLength={8}
                value={formData.password}
                onChange={(e) => {
                  setFormData({...formData, password: e.target.value});
                  validatePassword(e.target.value);
                }}
                error={errors.password}
                showPasswordToggle
              />
              
              <div className="flex flex-wrap gap-2 mt-2 mb-4 text-sm text-gray-500">
                {[
                  { key: 'length', label: '8+ characters' },
                  { key: 'upper', label: 'Uppercase' },
                  { key: 'lower', label: 'Lowercase' },
                  { key: 'number', label: 'Number' }
                ].map(({ key, label }) => (
                  <span 
                    key={key}
                    className={`
                      flex items-center gap-1.5
                      ${passwordReqs[key] ? 'text-primary' : ''}
                    `}
                  >
                    <span className={`
                      w-3.5 h-3.5 rounded-full border-2
                      flex items-center justify-center
                      ${passwordReqs[key] 
                        ? 'bg-primary border-primary' 
                        : 'border-gray-300'
                      }
                    `}>
                      {passwordReqs[key] && (
                        <Check size={10} className="text-white" />
                      )}
                    </span>
                    {label}
                  </span>
                ))}
              </div>
              
              <input
                id="confirm-password"
                type="password"
                label="Confirm Password"
                placeholder="Confirm your Password"
                icon={Lock}
                required
                value={formData.confirmPassword}
                onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                error={errors.confirmPassword}
                showPasswordToggle
              />
              
              <button type="submit" variant="primary" fullWidth className="mb-4">
                Create Account
              </button>
            </form>
            
            <p className="text-center text-sm text-gray-600">
              Already have an account?{' '}
              <button 
                type="button"
                onClick={() => handleNavigate('/login')}
                className="text-primary font-medium hover:text-primary-dark hover:underline"
              >
                Log In
              </button>
            </p>
          </div>
          
          <p className="text-center text-sm text-gray-500 mt-6">
            By signing up, you agree to our{' '}
            <button type="button" className="text-gray-600 hover:underline">Terms of Service</button>
            {' '}and{' '}
            <button type="button" className="text-gray-600 hover:underline">Privacy Policy</button>
          </p>
        </div>
        
      </div> */}
    // </>
  // );
// };

