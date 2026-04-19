import { LuAward, LuBookOpen, LuCalendar, LuFlag, LuFlame, LuMail, LuTrophy } from "react-icons/lu";
import SideBar from "./components/sidebar";
import { useEffect, useState } from "react";
import axios from "axios";
export default function TutorProfilePage(){
    const [userData, setUserData] = useState(null);
    const token = localStorage.getItem("token"); 

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await axios.get(
                    "https://talentflowbackend.onrender.com/api/user/me",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );

                setUserData(res.data.data);

            } catch (err) {
                console.error(err.response?.data || err.message);
            }
        };

        if (token) fetchUser();
    }, [token]);

    
    return(
        <>
            <SideBar title="ST-Profile" userData={userData}>
                <div className="w-full h-auto py-5 px-7">
                    <div className="w-full p-6 bg-white border-1 border-[#D8D6EF] md:flex md:flex-row  flex flex-col md:space-x-4 mt-5 rounded-lg">
                        <p className="w-16 h-16 rounded-full text-[#1A7A4A] font-semibold bg-[#E8F5EC] flex items-center justify-center">
                            {userData?.fullName
                                ?.split(" ")
                                .map(n => n[0])
                                .join("")
                                .toUpperCase() || "NA"}
                        </p>
                        <div className="flex flex-col w-full md:w-auto px-3">
                            <h3 className="text-2xl font-semibold text-[#1A1A1A] mb-2">
                                {userData?.fullName || "User Name"}
                            </h3>
                            <div className="flex space-x-3">
                                <p className="w-35 px-3 py-1 text-xs bg-[#EAF3EE] text-[#4A5C52] border border-[#D8E6DF] rounded-md">
                                    {userData?.trn || "TRN"}
                                </p>
                                <p className="px-2.5 py-0.5 text-xs font-medium bg-[#E8F0FB] text-[#2563eb] flex items-center justify-center rounded-full">Tutor</p>
                            </div>
                            <div className="flex space-x-2 mt-3 items-center text-[#8A9E95] text-[14px]">
                                <LuMail />
                                <a href={`mailto:${userData?.email}`}>
                                    {userData?.email || "email@example.com"}
                                </a>
                                {/* <a href="mailto:adeola@trueminds.com">Chukwuemeka@trueminds.com</a> */}
                            </div>
                            <div className="flex space-x-2 mt-1.5 items-center text-[#8A9E95] text-[14px]">
                                <LuCalendar />
                                <p>Joined 1/15/2024</p>
                            </div>
                        </div>
                    </div>
                </div>
            </SideBar>
        </>
    )
}