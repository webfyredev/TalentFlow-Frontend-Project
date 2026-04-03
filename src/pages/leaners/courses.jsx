import SideBar from "./components/sidebar";
import { FaSearch } from "react-icons/fa";

export default function Courses(){
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
                </div>
            </SideBar> 
        </>
    )
}