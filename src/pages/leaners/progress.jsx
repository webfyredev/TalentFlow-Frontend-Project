import { LuTrendingUp, LuTrophy, LuCalendar, LuEye  } from "react-icons/lu";
import SideBar from "./components/sidebar";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Progress(){
    const [progressData, setProgressData] = useState(null);

    const token = localStorage.getItem("token");

    useEffect(() => {
        const fetchProgress = async () => {
            try {
                const res = await axios.get("https://talentflowbackend.onrender.com/api/progress", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                setProgressData(res.data.data);

            } catch (err) {
                console.log(err.response?.data || err.message);
            }
        };

        if (token) fetchProgress();

    }, [token]);

    if (!progressData && token) {
        return (
            <SideBar title="Progress" userData={null}>
                <div className="p-5">Loading progress...</div>
            </SideBar>
        );
    }

    // const timline = [
    //     {
    //         title : 'Joined TalentFlow',
    //         date : 'January 15 2024'
    //     },
    //     {
    //         title : 'First Course Enrolled',
    //         date : 'January 20, 2024'
    //     },
    //     {
    //         title : 'Completed First Assignment',
    //         date : 'February 10, 2024'
    //     },
    //     {
    //         title : 'First Course Completed',
    //         date : 'March 20, 2024'
    //     }
    // ]
    
    // const course_progress = [
    //     {
    //         title : 'Introduction to Web Development',
    //         author : 'Chukwuemeka Nwosu',
    //         modules : '3 of 4',
    //         percent : 65
    //     },
    //     {
    //         title : 'UI/UX Design Principles',
    //         author : 'Amina Bello',
    //         modules : '1 of 3',
    //         percent : 30
    //     },
    //     {
    //         title : 'Digital Marketing Fundamentals',
    //         author : 'Blessing Okafor',
    //         modules : '2 of 2',
    //         percent : 100,
    //     },
    // ]
     
    const progress_stats = [
        {
            icon : <LuTrophy />,
            title : 'Course Completed',
            style : 'bg-[#E8F5EC] text-[#1A7A4A]',
            // value : 1,
            value : progressData?.overallStats?.coursesCompleted || 0,
        },
        {
            icon : <LuEye />,
            title : 'In Progress',
            style : 'bg-[#E8F0FB] text-[#2563EB]',
            // value : 2
            value : progressData?.overallStats?.inProgress || 0
        },
        {
            icon : <LuCalendar />,
            title : 'Learning Days',
            style : 'bg-[#FDECDA] text-[#DD3E31]',
            // value : 72
            value : progressData?.overallStats?.learningDays || 0
        }
    ];
    const course_progress = progressData?.courses?.map((c) => ({
        title: c.title,
        author: c.instructor,
        modules: `${c.modulesCompleted} of ${c.totalModules}`,
        percent: c.progress
    })) || [];

    const timline = progressData?.milestones?.map((m) => ({
        title: m.title,
        date: m.date
    })) || [];
    return(
        <>
            <SideBar title="Progress">
                <div className="w-full h-auto p-5">
                    <h3 className="font-semibold text-2xl mt-3">Learning Progress</h3>
                    <p className="text-sm mt-2 text-[#8A9E95]">Track your journey and achievements</p>
                    <div className="px-5 py-8 mt-5 rounded-lg bg-gradient-to-br from-[#1A7A4A] to-[#156239]">
                        <div className="flex space-x-2">
                            <LuTrendingUp  className="w-12 h-12 p-3 text-white rounded-lg bg-white/20"/>
                            <div className="flex flex-col">
                                <p className="text-sm text-white/80">Overall Completion</p>
                                {/* <h3 className="text-3xl font-semibold text-white">65%</h3> */}
                                <h3 className="text-3xl font-semibold text-white">{progressData?.overallStats?.completionPercentage || 0}%</h3>

                            </div>
                        </div>
                        <div className="w-full mt-3">
                            <div className="relative w-full h-1.5 rounded-full bg-[#D8E6DF]">
                                {/* <div className="absolute w-[65%] bg-[#1A7A4A] h-full rounded-full"></div> */}
                                <div className="absolute  bg-[#1A7A4A] h-full rounded-full" style={{ width: `${progressData?.overallStats?.completionPercentage || 0}%`}}></div>

                            </div>
                        </div>
                        {/* <p className="mt-3 text-sm text-white/90">You're making great progress! Keep up the momentum</p> */}
                        <p className="mt-3 text-sm text-white/90">
                            {progressData?.overallStats?.encouragement ||
                            "You're making great progress! Keep up the momentum"}
                        </p>

                    </div>
                    <div className="w-full py-5 mt-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {progress_stats.map((data, index) => (
                            <div className="px-5 py-6 border bg-white flex flex-col border-1 border-[#D8D6EF] rounded-xl">
                                <div className="flex space-x-2.5 items-center">
                                    <div className={`w-10 h-10 flex items-center justify-center rounded-lg ${data.style}`}>
                                        {data.icon}
                                    </div>
                                    <p className="text-[#8A9E95] text-sm">
                                        {data.title}
                                    </p>
                                </div>
                                <h3 className="text-2xl font-semibold mt-3">
                                    {data.value}
                                </h3>
                            </div>
                        ))}
                    </div>
                    <div className="w-full py-5 mt-5">
                        <p className="text-lg font-semibold">Course Progress</p>
                        <div className="flex flex-col w-full space-y-3 py-5">
                            {course_progress.map((data, index) => (
                                <div className="w-full border-1 border-[#D8D6EF] hover:border-[#1A7A4A] p-5 bg-white rounded-lg flex flex-col transition-all duration-300">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-[#1A1A1A] font-semibold">{data.title}</h3>
                                        <h3 className="text-2xl font-semibold text-[#1A7A4A]">
                                            {data.percent}%
                                        </h3>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm text-[#8A9E95]">by {data.author}</p>
                                        {/* <p className="text-[12px] text-[#8A9E95]">Completed</p> */}
                                    </div>
                                    <div className="mt-5 w-full">
                                        <div className="w-full h-1.5 relative bg-[#D8E6DF] rounded-full">
                                            <div className="absolute h-full rounded-full bg-[#1A7A4A]" style={{ width: `${data.percent}%` }}>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between mt-2">
                                        <p className="text-sm text-[#8A9E95]">{data.modules} modules completed</p>
                                        <Link className="text-[14px] text-[#1A7A4A] font-semibold hover:underline">{data.percent === 100 ? 'View Certificates' : ''}</Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-full py-5">
                        <p className="text-lg font-semibold">Milestone Timeline</p>
                        <div className="w-full py-5 mt-5 rounded-xl bg-white flex flex-col space-y-3">
                            {timline.map((data) => (
                                <div className="p-3 flex space-x-3">
                                    <div className="w-9 h-9 flex items-center justify-center rounded-full bg-[#E8F5EC] text-[#1A7A4A]">
                                        <LuTrophy />
                                    </div>
                                    <div className="flex flex-col">
                                        <h3 className="text-[#1A1A1A] font-semibold mb-1">{data.title}</h3>
                                        <p className="text-[#8A9E95] text-sm">{data.date}</p>
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