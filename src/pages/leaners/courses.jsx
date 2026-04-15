import { useState, useEffect } from "react";
import SideBar from "./components/sidebar";
import { FaSearch } from "react-icons/fa";

// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { courseType as staticCourses } from "./data/course";



export default function Courses(){
    const courses = ['All', 'Development', 'Design', 'Data Science', 'Marketing', 'Business']
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [search, setSearch] = useState("");
    const [backendCourses, setBackendCourses] = useState([]);
    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const res = await fetch("https://talentflowbackend.onrender.com/api/courses");
                const data = await res.json();

                const formatted = data.map((course, index) => ({
                    id: course._id || index + 1000, // avoid collision with static
                    title: course.title,
                    text: course.description,
                    category: course.category || "Development",
                    author: course.instructor || "Admin",
                    modules: course.modules?.length || 0,
                    percent: 0,
                    image: course.image || "https://placehold.co/600x400",
                    status: "New",
                    style: "bg-[#E8F5EC] text-[#1A7A4A]"
                }));

                setBackendCourses(formatted);

            } catch (err) {
                console.error("Error fetching courses:", err);
            }
        };

        fetchCourses();
    }, []);

    const allCourses = [...staticCourses, ...backendCourses];
    const filteredCategory =
        selectedCategory === "All"
            ? allCourses
            : allCourses.filter(c => c.category === selectedCategory);

    const filteredCourses = filteredCategory.filter(course =>
        course.title.toLowerCase().includes(search.toLowerCase())
    );

    // const filteredCategory = selectedCategory === "All" ? courseType : courseType.filter(type => type.category === selectedCategory);

    return(
        <>
           <SideBar  title="Courses">
                <div className="w-full h-auto p-5">
                    <h3 className="font-semibold text-2xl mt-3">Course Catalog</h3>
                    <p className="text-sm mt-2 text-[#8A9E95]">Explore ad enroll in courses to expand your skills</p>
                    <div className="mt-2 w-full mt-3 lg:flex flex flex-col lg:flex-row lg:justify-between space-y-3 lg:space-y-0">
                        <div className="w-full lg:w-[75%] h-11 border border-[#D8D6EF] bg-white rounded-lg flex items-center px-3 space-x-2 focus:outline-none focus:ring-2 focus:ring-[#1A7A4A] focus:border-transparent transition-all">
                            <FaSearch  className="text-[#8F9E95]"/>
                            <input type="text" placeholder="Search Courses..." value={search} onChange={(e) => setSearch(e.target.value)} className="text-[#8A9E95] text-[13px] border-none outline-none w-full h-full "/>
                        </div>
                        <select 
                            value={selectedCategory}
                            onChange={(e) => setSelectedCategory(e.target.value)}
                            className="border w-full h-11 lg:h-auto lg:w-[23%] border border-[#D8D6EF] bg-white rounded-lg px-3 text-[13px] outline-none cursor-pointer">
                             {categories.map((data, index) => (
                                <option key={index} value={data}>{data}</option>
                            ))}
                            
                        </select>
                    </div>
                    
                    <div className="grid grid-cols-2 lg:grid-cols-6 gap-3 mt-5">
                        {categories.map((data, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedCategory(data)}
                                className={`py-2 rounded-md font-semibold text-sm
                                ${selectedCategory === data
                                    ? "bg-[#1A7A4A] text-white"
                                    : "bg-white border text-[#4A5C52]"}`}
                            >
                                {data}
                            </button>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">

                    {filteredCourses.map((data) => (
                        <div
                            key={data.id}
                            className="border flex flex-col group overflow-hidden rounded-xl"
                        >
                            <img
                                src={data.image}
                                className="h-48 object-cover w-full group-hover:scale-105 transition"
                            />

                            <p className={`absolute top-2 right-2 text-[11px] px-2 py-0.5 rounded-full ${data.style}`}>
                                {data.status}
                            </p>

                            <div className="bg-white p-3.5 space-y-2">

                                <p className="text-xs bg-[#E8F5EC] text-[#1A7A4A] w-fit px-2 py-1 rounded">
                                    {data.category}
                                </p>

                                <h3 className="font-semibold group-hover:text-[#1A7A4A]">
                                    {data.title}
                                </h3>

                                <p className="text-sm text-[#8A9E95]">
                                    {data.text}
                                </p>

                                <div className="flex justify-between text-sm text-[#8A9E95]">
                                    <p>by {data.author}</p>
                                    <p>{data.modules} modules</p>
                                </div>

                                <div className="w-full mt-3 h-1.5 bg-[#D8E6DF] rounded">
                                    <div
                                        className="h-full bg-[#1A7A4A] rounded"
                                        style={{ width: `${data.percent}%` }}
                                    />
                                </div>

                                <Link to={`/student-course/${data.id}`}>
                                    <button className="w-full mt-2 py-2.5 rounded-lg font-semibold bg-[#1A7A4A] text-white">
                                        {data.percent === 0 ? "Enroll Now" : "Continue Learning"}
                                    </button>
                                </Link>

                            </div>
                        </div>
                    ))}

                </div>
                    {/* <div className="w-full lg:py-5 mt-5">
                        <div className="lg:w-[75%] grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                            {courses.map((data, index) => (
                                <button key={index}
                                    onClick={() => {
                                        setSelectedCategory(data);
                                    }}
                                        className={`w-auto py-2 rounded-md font-semibold text-sm cursor-pointer hover:border-1 hover:border-[#1A7A4A] ${selectedCategory === data ? "bg-[#1A7A4A]  text-white" : "bg-white border-1 border-[#D8E6DF] text-[#4A5C52]" }`}
                                    >
                                        {data}
                                </button>
                            ))}
                        </div>
                        <div className="w-full py-5 mt-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
                            {filteredCategory.map((data, index) => (
                                <div className="border-1 border-[#D8D6EF] mb-2 flex flex-col relative rounded-xl group overflow-hidden hover:border-1 hover:border-[#1A7A4A]">
                                    <img src={data.image} alt="Course_Images" className="w-full h-48 object-cover group-hover:scale-105 transition-all duration-300" />
                                    <p className={`absolute top-2 right-2 text-[11px] px-2.5 rounded-full py-0.5 font-semibold ${data.style}`}>{data.status}</p>
                                    <div className="flex flex-col p-3.5 space-y-1.5 rounded-b-xl bg-white">
                                        <p className="text-xs w-25 font-medium mt-1 rounded-md px-1 py-1.5 flex items-center justify-center bg-[#E8F5EC] text-[#1A7A4A]">{data.category}</p>
                                        <h3 className="text-md font-semibold group-hover:text-[#1A7A4A]">{data.title}</h3>
                                        <p className="text-sm text-[#8A9E95]">{data.text}</p>
                                        <div className="flex justify-between items-center text-[#8A9E95] text-sm mt-1">
                                            <p>by {data.author}</p>
                                            <p>{data.modules} modules</p>
                                        </div>
                                        <div className="w-full mt-4">
                                            <div className="w-full h-1.5 rounded-md bg-[#D8E6DF] relative">
                                                <div className={`absolute rounded-md h-full bg-[#1A7A4A]`} style={{ width: `${data.percent}%` }}>

                                                </div>
                                            </div>

                                        </div>
                                        <button
                                            className={`font-semibold mt-2 py-2.5 text-sm rounded-lg cursor-pointer transition-all duration-300 ${data.percent === 0 ? "text-[#1A7A4A] border-1 border-[#1A7A4A] hover:bg-[#156239] hover:text-[#FFFFFF]" : "bg-[#1A7A4A] text-white hover:bg-[#156239]"}`}>
                                            <Link to={`/student-course/${data.id}`}>
                                                {data.percent === 0 ? "Enroll Now" : "Continue Learning"}
                                            </Link>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div> */}
                </div>
            </SideBar> 
        </>
    )
}