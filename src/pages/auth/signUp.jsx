import logoImg from '../../images/logo.png'
import { Link } from 'react-router-dom'
import { LuEye, LuEyeOff } from "react-icons/lu";

export default function SignUpPage(){
  return(
    <>
      <div className="w-full h-auto p-3 md:p-5 lg:p-10 flex flex-col items-center justify-center">
        <div className="w-full md:w-[75%] lg:w-[40%] h-auto p-3 md:p-5 flex flex-col items-center">
          <Link to="/">
            <img src={logoImg} className='w-60 h-20 object-cover' />
          </Link>
          <h3 className='text-3xl font-semibold text-[#1A1A1A] mb-2'>Join TalentFlow</h3>
          <p className='text-[#4A5C52]'>Create your account and start learning</p>
          <form action="" className='w-full h-auto shadow-md p-2 md:p-5 mt-5 bg-white rounded-xl border-[#D8D6EF]'>
            <div className='w-full p-2 flex flex-col'>
              <label htmlFor="text" className='text-sm font-medium text-[#1A1A1A] mb-2'>Full Name</label>
              <input type="text" className='text-sm w-full px-4 py-3 bg-white border border-[#D8E6DF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A7A4A] focus:border-transparent transition-all' placeholder='Adeola Ogunleye' required />
            </div>
            <div className='w-full p-2 flex flex-col'>
              <label htmlFor="email" className='text-sm font-medium text-[#1A1A1A] mb-2'>Email Address</label>
              <input type="email" className='text-sm w-full px-4 py-3 bg-white border border-[#D8E6DF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A7A4A] focus:border-transparent transition-all' placeholder='you@example.com' required />
            </div>
            <div className='w-full p-2 flex flex-col'>
              <label htmlFor="Password" className='text-sm font-medium text-[#1A1A1A] mb-2'>I am joining as a</label>
              <select name="" id="" className='text-sm w-full px-4 py-3 bg-white border border-[#D8E6DF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A7A4A] focus:border-transparent transition-all'>
                <option value="Learner">Learner</option>
                <option value="Learner">Mentor </option>
                <option value="Learner">Admin</option>

              </select>
            </div>
            <div className='w-full p-2 flex flex-col'>
              <label htmlFor="Password" className='text-sm font-medium text-[#1A1A1A] mb-2'>Password</label>
              <input type="password" className='text-sm w-full px-4 py-3 bg-white border border-[#D8E6DF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A7A4A] focus:border-transparent transition-all' placeholder='examplepassword' required />
            </div>
            <div className='w-full p-2 flex flex-col'>
              <label htmlFor="Password" className='text-sm font-medium text-[#1A1A1A] mb-2'>Confirm Password</label>
              <input type="password" className='text-sm w-full px-4 py-3 bg-white border border-[#D8E6DF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A7A4A] focus:border-transparent transition-all' placeholder='........' required />
            </div>
            <div className='w-full p-2 flex justify-between items-center'>
              <div className='flex items-center'>
                <input type="checkbox" className='w-4 h-4 mt-1 text-[#1A7A4A] border-[#D8E6DF] rounded focus:ring-[#1A7A4A]' />
                <span className='ml-2 text-xs md:text-sm text-[#4A5C52]'>I agree to the <a href="" className='text-[#1A7A4A] hover:underline'>Terms of Service</a> and <a href="" className='text-[#1A7A4A] hover:underline'>Privacy Policy</a></span>
              </div>
            </div>
            <button type='submit' className=' mt-5 cursor-pointer w-full bg-[#1A7A4A] text-white py-3 rounded-lg hover:bg-[#156239] transition-colors font-medium'>Create Account</button>
            <p className='mt-5 flex justify-center items-center text-sm text-[#4A5C52]'>Already have have an account <Link to="/sign-in" className='text-[#1A7A4A] hover:underline font-medium ml-2'>Sign In </Link></p>
          </form>
        </div>
      </div>
    </>
  )
}