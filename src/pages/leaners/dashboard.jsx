import { useEffect } from "react"
import SideBar from "./components/sidebar";

export default function Learners_Dashboard(){
    useEffect(() => {
        document.title = 'Dashboard'
    }, []);

    return(
        <>
            <SideBar />
        </>
    )
}