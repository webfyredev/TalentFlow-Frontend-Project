import { useState } from "react";
import SideBar from "./components/sidebar";
import { FaSearch } from "react-icons/fa";
import cosImg1 from '../../images/cos1.jpg'
import cosImg2 from '../../images/cos2.jpg'
import cosImg3 from '../../images/cos3.jpg'
import cosImg4 from '../../images/cos4.jpg'
import cosImg5 from '../../images/cos5.jpg'
import cosImg6 from '../../images/cos6.jpg'


export default function Courses(){
    const courseType = [
        {
            image : cosImg1,
            status : 'In Progress',
            category : 'Development',
            title : 'Introduction to Web Development',
            text : 'Learn the fundamentals of HTML, CSS, and Javascript to build modern web...',
            author : 'Chukwuemeka Nwosu',
            modules : 4,
            percent : 65,
            style : 'bg-[#E8F0FB] text-[#2563EB]'
        },
        {
            image : cosImg2,
            status : 'In Progress',
            category : 'Design',
            title : 'UI/UX Design Principles',
            text : 'Master the art of creating beautiful and functional user interfaces with modern...',
            author : 'Amina Bello',
            modules : 3,
            percent : 30,
            style : 'bg-[#E8F0FB] text-[#2563EB]'
        },
        {
            image : cosImg3,
            status : '',
            category : 'Data Science',
            title : 'Data Analysics with Python',
            text : 'Dive into data analysis using Python, pandas, and visualization libraries',
            author : 'Oluwaseun Adeyemi',
            modules : 5,
            percent : 0
        },
        {
            image : cosImg4,
            status : '',
            category : 'Development',
            title : 'Mobile App Development',
            text : 'Build native mobile applications for IOS and Android using React Native.',
            author : 'Chukwuemeka Nwosu',
            modules : 6,
            percent : 0
        },
        {
            image : cosImg5,
            status : 'Completed',
            category : 'Marketing',
            title : 'Digital Marketing Fundamentals',
            text : 'Learn strategies for SEO, social media marketing, and content creation',
            author : 'blessing Okafor',
            modules : 2,
            percent : 100,
            style : 'bg-[#E8F5EC] text-[#1A7A4A]'

        },
        {
            image : cosImg6,
            status : '',
            category : 'Business',
            title : 'Project Management Essentials',
            text : 'Master project planning, execution and team leadership skills',
            author : 'Ibrahim Mohammed',
            modules : 3,
            percent : 0
        }
    ]
    const courses = ['All', 'Development', 'Design', 'Data Science', 'Marketing', 'Business']
    const [selectedCategory, setSelectedCategory] = useState("All");
    const filteredCategory = selectedCategory === "All" ? courseType : courseType.filter(type => type.category === selectedCategory);

    return(
        <>
           <SideBar >
                <div className="w-full h-auto p-5">
                    <h3 className="font-semibold text-2xl mt-3">Course Catalog</h3>
                    <p className="text-sm mt-2 text-[#8A9E95]">Explore ad enroll in courses to expand your skills</p>
                    <div className="mt-2 w-full mt-3 flex justify-between">
                        <div className="w-[75%] h-11 border border-[#D8D6EF] bg-white rounded-lg flex items-center px-3 space-x-2 focus:outline-none focus:ring-2 focus:ring-[#1A7A4A] focus:border-transparent transition-all">
                            <FaSearch  className="text-[#8F9E95]"/>
                            <input type="text" placeholder="Search Courses..." className="text-[#8A9E95] text-[13px] border-none outline-none w-full h-full "/>
                        </div>
                        <select className="border w-[23%] border border-[#D8D6EF] bg-white rounded-lg px-3 text-[13px] outline-none cursor-pointer">
                            <option value="all">All Categories</option>
                            <option value="Development">Development</option>
                            <option value="Development">Design</option>
                            <option value="Development">Data Science</option>
                            <option value="Development">Marketing</option>
                            <option value="Development">Business</option>
                        </select>
                    </div>
                    <div className="w-full p-5 mt-5">
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
                        <div className="w-full py-5 mt-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {filteredCategory.map((data, index) => (
                                <div className="border-1 border-[#D8D6EF] mb-2 flex flex-col relative rounded-xl group overflow-hidden hover:border-1 hover:border-[#1A7A4A]">
                                    <img src={data.image} alt="Course_Images" className="w-full h-48 object-cover group-hover:scale-105 transition-all duration-300" />
                                    <p className={`absolute top-2 right-2 text-[11px] px-2.5 rounded-full py-0.5 font-semibold ${data.style}`}>{data.status}</p>
                                    <div className="flex flex-col p-3.5 space-y-1.5 rounded-b-xl bg-white">
                                        <p className="text-xs w-20 font-medium mt-1 rounded-md px-1 py-1.5 flex items-center justify-center bg-[#E8F5EC] text-[#1A7A4A]">{data.category}</p>
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
                                        <button className={` font-semibold mt-2 py-2.5 text-sm rounded-lg cursor-pointer transition-all duration-300 ${data.percent === 0 ? "text-[#1A7A4A] border-1 border-[#1A7A4A] hover:bg-[#156239] hover:text-[#FFFFFF]" : "bg-[#1A7A4A] text-white hover:bg-[#156239]"}`}>
                                            {data.percent === 0 ? "Enroll Now" : "Continue Learning"}
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </SideBar> 
        </>
    )
}