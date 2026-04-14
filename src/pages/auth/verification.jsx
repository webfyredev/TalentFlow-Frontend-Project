import { Link } from "react-router-dom"
import logoImg from '../../images/logo.png'
import axios from "axios"
export default function Verification(){
    const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [referenceNumber, setReferenceNumber] = useState("");
  const [courseId, setCourseId] = useState("");

  const token = localStorage.getItem("token");

  const handleVerify = async (e) => {
    e.preventDefault();

    // ✅ BASIC VALIDATION
    if (!fullName || !referenceNumber || !courseId) {
      alert("All fields are required");
      return;
    }

    // ❌ NO TOKEN → BACK TO LOGIN
    if (!token) {
      alert("Session expired. Please login again.");
      navigate("/sign-in");
      return;
    }

    try {
      const res = await axios.post(
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

      alert("Verification successful 🎉");

      // ✅ SAVE VERIFIED STATE
      localStorage.setItem("isVerified", "true");

      // ✅ ROLE-BASED NAVIGATION (VERY IMPORTANT)
      const role = res.data.role;

      if (role === "learner") {
        navigate("/learners_dashboard");
      } else if (role === "tutor") {
        navigate("/tutor-dashboard");
      } else {
        navigate("/"); // fallback
      }

    } catch (err) {
      console.log(err.response?.data || err.message);
      alert(err.response?.data?.message || "Verification failed");
    }
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
          <form onSubmit={handleVerify} action="" className='w-full h-auto shadow-md p-2 md:p-5 mt-5 bg-white rounded-xl border-[#D8D6EF] border'>
            <div className='w-full p-2 flex flex-col'>
              <label htmlFor="text" className='text-sm font-medium text-[#1A1A1A] mb-2'>Full Name</label>
              <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} className='text-sm w-full px-4 py-3 bg-white border border-[#D8E6DF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A7A4A] focus:border-transparent transition-all' placeholder='John Kole' required />
            </div>
            <div className='w-full p-2 flex flex-col'>
              <label htmlFor="text" className='text-sm font-medium text-[#1A1A1A] mb-2'>Reference Number</label>
              <input type="text"  value={referenceNumber} onChange={(e) => setReferenceNumber(e.target.value)} className='text-sm w-full px-4 py-3 bg-white border border-[#D8E6DF] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A7A4A] focus:border-transparent transition-all' placeholder='TF-2026-BX0U' required />
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