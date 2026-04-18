import { Link, useNavigate } from "react-router-dom"
import logoImg from '../../images/logos.png'
import { useState } from "react";
import axios from "axios"
export default function Verification(){
   const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [referenceNumber, setReferenceNumber] = useState("");
  const [courseId, setCourseId] = useState("");
  const [successMsg, setSuccessMsg] = useState("")
  const [errorMsg, setErrorMsg] = useState("")

  const token = localStorage.getItem("token");

  const handleVerify = async (e) => { 
    e.preventDefault();

    // ✅ BASIC VALIDATION
    if (!fullName || !referenceNumber || !courseId) {
      setErrorMsg("All fields are required");
      setSuccessMsg("")
      return;
    }

    // ❌ NO TOKEN → BACK TO LOGIN
    if (!token) {
        setErrorMsg("Session expired. Please login again.");
        setSuccessMsg("")
        navigate("/sign-in");
        return;
    }

    try {
      const res = await axios.put(
        "https://talentflowbackend.onrender.com/api/auth/verify-role",
        {
          fullName,
          referenceNumber,
          courseId
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      console.log(res.data);

      setSuccessMsg("Verification successful 🎉");
      setErrorMsg("");

      // ✅ SAVE VERIFIED STATE
      localStorage.setItem("isVerified", "true");
      const role = res.data.role;

      // ✅ NAVIGATE TO LOGIN PAGE
      setTimeout(() => {
        if (role === "learner"){
            navigate("/learners_dashboard")
        } else if(role === "tutor"){
            navigate("/tutor-dashboard");
        } else {
            navigate("/")
        }
      }, 2000)

    } catch (err) {
      console.log(err.response?.data || err.message);
      setErrorMsg(err.response?.data?.message || "Verification failed");
      setSuccessMsg("")
    };
  };


    return(
    <>
      <div className="w-full h-screen lg:p-10 flex flex-col items-center justify-center">
        <div className="w-full md:w-[75%] lg:w-[40%] h-auto p-5 flex flex-col items-center">
          <Link to="/">
            <img src={logoImg} className='w-60 h-20 object-cover' />
          </Link>
          <h3 className='text-2xl md:text-3xl font-semibold text-[#1A1A1A] mb-2'>Verify Account</h3>
          {/* <p className='text-[#4A5C52]'>Sign in to continue your learning journey</p> */}
          {successMsg && (
            <div className="mt-5 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-4 w-full">
                {successMsg}
            </div>
            )}

            {errorMsg && (
            <div className="mt-5 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-4 w-full">
                {errorMsg}
            </div>
            )}
          <form onSubmit={handleVerify} action="" className='w-full h-auto shadow-md p-2 md:p-5 mt-5 bg-white rounded-xl border-[#D8D6EF] border'>
            <div className='w-full p-2 flex flex-col'>
              <label htmlFor="text" className='text-sm font-medium text-[#1A1A1A] mb-2'>Full Name</label>
              <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} className='text-sm w-full px-4 py-3 bg-white border border-[#D8E6DF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A7A4A] focus:border-transparent transition-all' placeholder='John Kole' required />
            </div>
            <div className='w-full p-2 flex flex-col'>
              <label htmlFor="text" className='text-sm font-medium text-[#1A1A1A] mb-2'>Reference Number</label>
              <input type="text" value={referenceNumber} onChange={(e) => setReferenceNumber(e.target.value)} className='text-sm w-full px-4 py-3 bg-white border border-[#D8E6DF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A7A4A] focus:border-transparent transition-all' placeholder='LRN/TRN-2026-XXXXX' required />
            </div>
            <div className='flex flex-col p-2 w-full'>
              <label className='font-medium mb-2 text-sm'>
                Course Enrolled
              </label>
              <select value={courseId} onChange={(e) => setCourseId(e.target.value)} className='border border-[#D8E6DF] px-4 py-3 rounded-lg text-sm w-full'>
                <option value="">Select Course</option>
                <option value="69d3a887524a5f49708a4f5a">Frontend Development</option>
                <option value="69d3a887524a5f49708a4f5b">Backend Development</option>
                <option value="69d3a887524a5f49708a4f5c">UI/UX Design</option>
                <option value="69d3a887524a5f49708a4f5d">Project Management</option>
                <option value="69d3a887524a5f49708a4f5e">AI Integration</option>
                <option value="69d3a887524a5f49708a4f5f">Machine Learning</option>
              </select>
            </div>
            <button type='submit' className='mt-5 cursor-pointer w-full bg-[#1A7A4A] text-white py-3  mb-10 rounded-lg hover:bg-[#156239] transition-colors font-medium'>Verify Now</button>
          </form>
        </div>
      </div>
    </>
  )
}