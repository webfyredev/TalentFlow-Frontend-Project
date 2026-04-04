import { LuArrowLeft } from "react-icons/lu";
import SideBar from "./components/sidebar";
import { courseType } from "./data/course";
import { useParams, Link } from "react-router-dom";

export default function Assessment(){
    const { id } = useParams();
        const courses = courseType.find((item) => item.id ===   Number(id));
    return(
        <>
            <SideBar title="Assessment">
                <div className="w-full h-auto p-5">
                <div className="flex space-x-3 border">
                    <Link to="/student-course" className="flex  items-center space-x-1 text-[#8A9E95] hover:text-[#E8F5EC] font-semibold">
                        <LuArrowLeft  size={15} className="mt-0.5"/>
                        {/* <p>{courses.modules.} /</p> */}
                    </Link>
                </div>
                </div>
            </SideBar>
        </>
    )
}