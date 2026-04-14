import { Link } from "react-router-dom"
import logoImg from '../../images/logo.png'

export default function Verification(){
    return(
    <>
      <div className="w-full h-screen lg:p-10 flex flex-col items-center justify-center">
        <div className="w-full md:w-[75%] lg:w-[40%] h-auto p-5 flex flex-col items-center">
          <Link to="/">
            <img src={logoImg} className='w-60 h-20 object-cover' />
          </Link>
          <h3 className='text-2xl md:text-3xl font-semibold text-[#1A1A1A] mb-2'>Verify Account</h3>
          {/* <p className='text-[#4A5C52]'>Sign in to continue your learning journey</p> */}
          <form action="" className='w-full h-auto shadow-md p-2 md:p-5 mt-5 bg-white rounded-xl border-[#D8D6EF] border'>
            <div className='w-full p-2 flex flex-col'>
              <label htmlFor="text" className='text-sm font-medium text-[#1A1A1A] mb-2'>Full Name</label>
              <input type="text"  className='text-sm w-full px-4 py-3 bg-white border border-[#D8E6DF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A7A4A] focus:border-transparent transition-all' placeholder='John Kole' required />
            </div>
            <div className='w-full p-2 flex flex-col'>
              <label htmlFor="text" className='text-sm font-medium text-[#1A1A1A] mb-2'>Reference Number</label>
              <input type="text"  className='text-sm w-full px-4 py-3 bg-white border border-[#D8E6DF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A7A4A] focus:border-transparent transition-all' placeholder='TF-2026-BX0U' required />
            </div>
            <div className='flex flex-col p-2 w-full'>
              <label className='font-medium mb-2 text-sm'>
                Course Enrolled
              </label>
              <select className='border border-[#D8E6DF] px-4 py-3 rounded-lg text-sm w-full'>
                <option value="Web Development">Web Development</option>
                <option value="Mobile Application">Mobile Application</option>
                <option value="UI/UX Design">UI/UX Design</option>
              </select>
            </div>
            <button type='submit' className='mt-5 cursor-pointer w-full bg-[#1A7A4A] text-white py-3  mb-10 rounded-lg hover:bg-[#156239] transition-colors font-medium'>Verify Now</button>
          </form>
        </div>
      </div>
    </>
  )
}