import logoImg from '../../images/logos.png'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { motion } from 'framer-motion';
import { buttonHoverEffects } from '../leaners/components/effect';


export default function LoginPage(){
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();

  // ✅ STATE
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ✅ HANDLE LOGIN
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://talentflowbackend.onrender.com/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          password
        })
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.message || "Login failed");
        setSuccessMsg("")
        return;
      }

      console.log("Login success:", data);

      //  SAVE TOKEN
      localStorage.setItem("token", data.token);

      //  SAVE USER
      localStorage.setItem("user", JSON.stringify(data.user));
      const role = data.user.role

      if(!data.user.isRoleVerified){
        navigate("/verify-account");
        return;
      }

      //  UPDATED FLOW (LOGIN → VERIFICATION FIRST)
      if (role === "learner") {
        navigate("/learners_dashboard");
      } else if (role === "tutor") {
        navigate("/tutor-dashboard");
      } else if (role === "admin") {
        navigate("/admin-dashboard");
      } else {
        navigate("/");
      }

    } catch (err) {
      console.error("Login error:", err);
      setErrorMsg("Something went wrong");
      setSuccessMsg("")
    }
  };

  return(
    <>
      <div className="w-full h-screen lg:p-10 flex flex-col items-center justify-center">
        <div className="w-[95%] md:w-[75%] lg:w-[40%] h-auto p-5 flex flex-col items-center">
          <Link to="/">
            <img src={logoImg} className='w-60 h-20 object-cover' />
          </Link>
          <h3 className='text-2xl md:text-3xl font-semibold text-[#1A1A1A] mb-2'>Welcome to TalentFlow</h3>
          <p className='text-[#4A5C52]'>Sign in to continue your learning journey</p>
          <form onSubmit={handleLogin} action="" className='w-full h-auto shadow-md p-2 md:p-5 mt-5 bg-white rounded-xl border-[#D8D6EF] border'>
            <div className='w-full p-2 flex flex-col'>
              <label htmlFor="email" className='text-sm font-medium text-[#1A1A1A] mb-2'>Email Address</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className='text-sm w-full px-4 py-3 bg-white border border-[#D8E6DF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A7A4A] focus:border-transparent transition-all' placeholder='you@example.com' required />
            </div>
            <div className='w-full p-2 flex flex-col'>
              <label htmlFor="Password" className='text-sm font-medium text-[#1A1A1A] mb-2'>Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='text-sm w-full px-4 py-3 bg-white border border-[#D8E6DF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A7A4A] focus:border-transparent transition-all' placeholder='examplepassword' required />
            </div>
            <div className='w-full p-2 flex justify-between items-center'>
              <div className='flex items-center'>
                <input type="checkbox" className='mt-1 w-4 h-4 text-[#1A7A4A] border-[#D8E6DF] rounded focus:ring-[#1A7A4A]' />
                <span className='ml-2 text-sm text-[#4A5C52]'>Remember Me</span>
              </div>
              <Link className='font-medium text-sm text-[#1A7A4A] hover:underline'>Forgot Password?</Link>
            </div>
            <motion.button 
              {...buttonHoverEffects}
              type='submit' className='mt-5 cursor-pointer w-full bg-[#1A7A4A] text-white py-3 rounded-lg hover:bg-[#156239] transition-colors font-medium'>Sign In</motion.button>
            <p className='my-6 flex justify-center items-center text-sm text-[#4A5C52]'>Don't have an account <Link to="/sign-up" className='text-[#1A7A4A] hover:underline font-medium ml-2'>Sign Up </Link>  <span className='ml-2 '>Or </span> <Link to="/verify-account" className='text-[#1A7A4A] hover:underline font-medium ml-2'>Verify account </Link></p>
          </form>
        </div>
      </div>
    </>
  )
}