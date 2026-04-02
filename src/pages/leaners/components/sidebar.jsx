import { Link, NavLink } from "react-router-dom"
import logoImg from "../../../images/logo.png"
import { FaSearch, FaTachometerAlt } from "react-icons/fa"
import { LuLayoutDashboard, LuBookOpen, LuClipboardList, LuTrendingUp, LuMessageSquare, LuSettings, LuBell } from "react-icons/lu";
export default function SideBar(){
    
    return(
        <>
            <div className="w-full h-[100vh] flex">
                <div className="w-[22%] h-full flex flex-col bg-[#EAF3EE]">
                        <Link className="w-full">
                            <img src={logoImg} alt="logoImg" className="w-55 h-30 object-cover" />
                        </Link>
                        <ul className="flex flex-col items-center space-y-2.5 mt-2 text-[#4A5C52] poppins-font normal">
                            <li className="w-[95%] font-semibold text-[12.5px] transition-all hover:bg-[#F4F6F5] hover:shadow-sm">
                                <NavLink to="/learner_dashboard" className={({isActive}) => `flex space-x-3 flex justify-left items-center p-3 ${isActive ? 'hover:bg-[#FFFFFF] hover:rounded-lg bg-[#F4F6F5]' : ''}`}>
                                    <LuLayoutDashboard  className="text-[15px]"/> 
                                    <p>Dashboard</p>
                                </NavLink> 
                            </li>
                            <li className="w-[95%] font-semibold text-[12.5px] transition-all hover:bg-[#F4F6F5] hover:shadow-xs">
                                <NavLink to="/courses" className={({isActive}) => `flex space-x-3 flex justify-left items-center p-3 ${isActive ? 'hover:bg-[#FFFFFF] hover:rounded-lg bg-[#F4F6F5]' : ''}`}>
                                    <LuBookOpen  className="text-[15px]"/> 
                                    <p>Courses</p>
                                </NavLink> 
                            </li>
                            <li className="w-[95%] font-semibold text-[12.5px] transition-all hover:bg-[#F4F6F5] hover:shadow-xs">
                                <NavLink to="/learner_dashboard" className={({isActive}) => `flex space-x-3 flex justify-left items-center p-3 ${isActive ? 'hover:bg-[#FFFFFF] hover:rounded-lg bg-[#F4F6F5]' : ''}`}>
                                    <LuClipboardList  className="text-[15px]"/> 
                                    <p>Assignments</p>
                                </NavLink> 
                            </li>
                            <li className="w-[95%] font-semibold text-[12.5px] transition-all hover:bg-[#F4F6F5] hover:shadow-xs">
                                <NavLink to="/learner_dashboard" className={({isActive}) => `flex space-x-3 flex justify-left items-center p-3 ${isActive ? 'hover:bg-[#FFFFFF] hover:rounded-lg bg-[#F4F6F5]' : ''}`}>
                                    <LuTrendingUp  className="text-[15px]"/> 
                                    <p>Progress</p>
                                </NavLink> 
                            </li>
                            <li className="w-[95%] font-semibold text-[12.5px] transition-all hover:bg-[#F4F6F5] hover:shadow-xs">
                                <NavLink to="/learner_dashboard" className={({isActive}) => `flex space-x-3 flex justify-left items-center p-3 ${isActive ? 'hover:bg-[#FFFFFF] hover:rounded-lg bg-[#F4F6F5]' : ''}`}>
                                    <LuMessageSquare  className="text-[15px]"/> 
                                    <p>Discussion</p>
                                </NavLink> 
                            </li>
                            <li className="mt-50 w-[95%] font-semibold text-[12.5px] transition-all hover:bg-[#F4F6F5] hover:shadow-xs">
                                <NavLink to="/learner_dashboard" className={({isActive}) => `flex space-x-3 flex justify-left items-center p-3 ${isActive ? 'hover:bg-[#FFFFFF] hover:rounded-lg bg-[#F4F6F5]' : ''}`}>
                                    <LuSettings  className="text-[15px]"/> 
                                    <p>Settings</p>
                                </NavLink> 
                            </li>
                        </ul>
                            
                </div>
                <div className="w-[78%] h-full flex flex-col">
                    <div className="w-full h-15 border flex px-5 items-center space-x-5">
                        <h3 className="font-semibold text-[#1A1A1A] text-lg">Dashboard</h3>
                        <div className="w-150 h-10 border-1 border-[#D8D6EF]  hover:border-1.5 hover:border-[#1A7A4A] bg-[#F4F6F5] rounded-lg flex items-center px-3 space-x-2">
                            <FaSearch  className="text-[#8F9E95]"/>
                            <input type="text" placeholder="Search Courses, assignments..." className="text-[#8A9E95] text-[13px] border-none outline-none w-full h-full"/>
                        </div>
                        <div className="w-60 h-full flex space-x-3 items-center">
                            <Link className="w-10 h-10 relative flex items-center justify-center rounded-md hover:bg-[#EAF3EE] transition-all ">
                                <LuBell  className="w-7 h-7 p-1 text-[#1A7A4A]"/>
                                <div className="absolute w-2 h-2 rounded-full top-[5px] right-1.5 bg-[#DC2626]"></div>
                            </Link>
                            <Link className="w-45 h-[85%] hover:bg-[#EAF3EE] rounded-lg flex space-x-3 items-center px-2 transition-all ">
                                <p className="w-9 h-9 items-center flex justify-center rounded-full text-[12px] font-semibold text-[#1A7A4A] bg-[#EAF3EE]">
                                    AO
                                </p>
                                <div className="flex flex-col">
                                    <p className="text-[12px] font-semibold text-[#191A3B]">Adeola Ogunleye</p>
                                    <p className="text-[12px] font-semibold text-[#8A98AB]">TM-L-2024-001</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                    
                </div>

            </div>
        </>
    )
}